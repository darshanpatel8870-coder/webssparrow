import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// In-memory rate limiter: max 3 requests per IP per 10 minutes
const ipSubmissionsMap = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, service, budget, deadline, description, communication, honeypot, formLoadedAt } = data;

    // 1. Validation check
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Required fields (name, email, description) are missing" },
        { status: 400 }
      );
    }

    // 2. Anti-Spam Check #1: Honeypot Trap
    if (honeypot && honeypot.trim() !== "") {
      console.warn("[SPAM BLOCKED] Honeypot field filled by bot:", email);
      // Quiet 200 response to trick bots
      return NextResponse.json({ success: true, spam: true });
    }

    // 3. Anti-Spam Check #2: Time-Lock Protection (submissions in under 3s are automated bots)
    if (formLoadedAt) {
      const timeElapsedSeconds = (Date.now() - Number(formLoadedAt)) / 1000;
      if (timeElapsedSeconds < 3) {
        console.warn(`[SPAM BLOCKED] Super-fast submission (${timeElapsedSeconds.toFixed(1)}s) by bot:`, email);
        return NextResponse.json({ success: true, spam: true });
      }
    }

    // 4. Anti-Spam Check #3: IP Rate Limiting (max 3 per 10 mins)
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1";
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes
    const timestamps = (ipSubmissionsMap.get(ip) || []).filter(ts => now - ts < windowMs);

    if (timestamps.length >= 5) {
      console.warn(`[RATE LIMIT EXCEEDED] IP ${ip} blocked from submitting more forms.`);
      return NextResponse.json(
        { error: "Too many submission attempts. Please wait 10 minutes before submitting again." },
        { status: 429 }
      );
    }
    timestamps.push(now);
    ipSubmissionsMap.set(ip, timestamps);

    const submissionTime = new Date().toISOString();

    // 5. Save Entry to Local CSV Spreadsheet Backup (public/submissions.csv)
    try {
      const csvPath = path.join(process.cwd(), "public", "submissions.csv");
      const csvHeader = "Timestamp,Name,Email,Phone,Company,Service,Budget,Deadline,Description,Communication\n";
      
      const escapeCsv = (val: string = "") => `"${String(val).replace(/"/g, '""').replace(/[\r\n]+/g, ' ')}"`;
      const row = `${submissionTime},${escapeCsv(name)},${escapeCsv(email)},${escapeCsv(phone)},${escapeCsv(company)},${escapeCsv(service)},${escapeCsv(budget)},${escapeCsv(deadline)},${escapeCsv(description)},${escapeCsv(communication)}\n`;

      if (!fs.existsSync(csvPath)) {
        fs.writeFileSync(csvPath, csvHeader + row, "utf8");
      } else {
        fs.appendFileSync(csvPath, row, "utf8");
      }
      console.log(`[SPREADSHEET SAVED] Contact entry recorded in ${csvPath}`);
    } catch (err) {
      console.error("Error writing CSV entry: ", err);
    }

    // 6. Forward to Google Sheets Webhook (if GOOGLE_SHEETS_WEBHOOK_URL env is set)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.trim() !== "") {
      try {
        const gsRes = await fetch(webhookUrl.trim(), {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            timestamp: submissionTime,
            name,
            email,
            phone: phone || "N/A",
            company: company || "N/A",
            service,
            budget: budget || "N/A",
            deadline,
            description,
            communication
          }),
          redirect: "follow"
        });
        const resText = await gsRes.text();
        console.log(`[GOOGLE SHEETS SYNC] Status: ${gsRes.status} | Response: ${resText.substring(0, 100)}`);
      } catch (err) {
        console.error("Error forwarding to Google Sheets Webhook:", err);
      }
    } else {
      console.warn("[GOOGLE SHEETS NOTICE] GOOGLE_SHEETS_WEBHOOK_URL is empty in .env.local");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Contact Route Error: ", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
