export const prerender = false;

import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { validateIntake } from "../../lib/intake";

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
};

const rateLimit = (ip: string) => {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    const retryAfterMs = Math.max(existing.resetAt - now, 0);
    return { allowed: false, retryAfterMs };
  }

  existing.count += 1;
  return { allowed: true };
};

const parseBody = async (request: Request) => {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    const payload: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") payload[key] = value;
    }
    return payload;
  }

  // Fallback attempts
  try {
    const formData = await request.formData();
    const payload: Record<string, unknown> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") payload[key] = value;
    }
    if (Object.keys(payload).length > 0) return payload;
  } catch {}

  try {
    return (await request.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
};

const toStr = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const normalizeIntakePayload = (payload: Record<string, unknown>) => {
  const name =
    toStr(payload.name) ||
    toStr(payload.fullName) ||
    toStr(payload.full_name) ||
    toStr(payload["Full name"]);

  const email =
    toStr(payload.email) ||
    toStr(payload.mail) ||
    toStr(payload.userEmail) ||
    toStr(payload.user_email);

  const company =
    toStr(payload.company) ||
    toStr(payload.organization) ||
    toStr(payload.org) ||
    toStr(payload.business);

  const projectType =
    toStr(payload.projectType) ||
    toStr(payload.project_type) ||
    toStr(payload.type) ||
    toStr(payload.project);

  const budget =
    toStr(payload.budget) ||
    toStr(payload.budgetRange) ||
    toStr(payload.budget_range) ||
    toStr(payload.budgetrange);

  const timeline =
    toStr(payload.timeline) ||
    toStr(payload.timeframe) ||
    toStr(payload.time_frame) ||
    toStr(payload.timeline_option);

  const message =
    toStr(payload.message) ||
    toStr(payload.details) ||
    toStr(payload.projectDetails) ||
    toStr(payload.project_details);

  const website = toStr(payload.website);

  return {
    ...payload,
    name,
    email,
    company,
    projectType,
    budget,
    timeline,
    message,
    website,
  } as Record<string, unknown>;
};

// Prefer Vite/Astro env, fallback to process.env
const mustGetEnv = (key: string) => {
  const value = import.meta.env[key] || process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
};

const escapeHtml = (str: string) =>
  str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatIntakeHtml = (data: {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  projectType: string;
  timeline?: string;
  message: string;
}) => {
  const lines = [
    ["Full name", data.name],
    ["Email", data.email],
    ["Company", data.company ?? "-"],
    ["Project type", data.projectType],
    ["Budget", data.budget ?? "-"],
    ["Timeline", data.timeline ?? "-"],
  ] as const;

  const rows = lines
    .map(
      ([label, value]) => `
        <tr>
          <td style="
            padding:8px 10px;
            border:1px solid #e5e7eb;
            background:#f8fafc;
            font-weight:600;
            white-space:nowrap;
          ">
            ${escapeHtml(label)}
          </td>
          <td style="padding:8px 10px;border:1px solid #e5e7eb;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
      <h2 style="margin:0 0 12px;">New project intake</h2>

      <table cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;max-width:680px;">
        <tbody>${rows}</tbody>
      </table>

      <h3 style="margin:18px 0 8px;">Message</h3>
      <div style="
        white-space:pre-wrap;
        border:1px solid #e5e7eb;
        background:#ffffff;
        padding:12px;
        border-radius:10px;
        max-width:680px;
      ">
        ${escapeHtml(data.message)}
      </div>

      <p style="margin-top:14px;color:#64748b;font-size:12px;">
        Sent from your site intake form.
      </p>
    </div>
  `;
};

const formatIntakeText = (data: any) => {
  return [
    "New project intake",
    "------------------",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company ?? "-"}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget ?? "-"}`,
    `Timeline: ${data.timeline ?? "-"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = getClientIp(request);
    const rate = rateLimit(ip);

    if (!rate.allowed) {
      const seconds = Math.ceil(
        (rate.retryAfterMs ?? RATE_LIMIT_WINDOW_MS) / 1000
      );
      return jsonResponse(
        { ok: false, error: `Too many submissions. Try again in ${seconds}s.` },
        429
      );
    }

    const rawPayload = await parseBody(request);
    const payload = normalizeIntakePayload(rawPayload);

    console.info("[intake] received keys", Object.keys(payload));
    console.info("[intake] received preview", {
      name: payload.name,
      email: payload.email,
      projectType: payload.projectType,
      hasMessage: Boolean(payload.message),
    });

    const validation = validateIntake(payload);

    if (!validation.ok || !validation.data) {
      const firstError = validation.errors
        ? Object.values(validation.errors)[0]
        : "Invalid submission.";
      return jsonResponse({ ok: false, error: firstError }, 400);
    }

    // Honeypot: silently succeed
    if (typeof payload.website === "string" && payload.website.trim().length > 0) {
      return jsonResponse({ ok: true }, 200);
    }

    // ✅ env vars
    const SMTP_USER = mustGetEnv("SMTP_USER");
    const SMTP_PASS = mustGetEnv("SMTP_PASS");
    const TO_EMAIL = mustGetEnv("TO_EMAIL");
    const FROM_EMAIL =
      (import.meta as any).env?.SMTP_FROM || process.env.SMTP_FROM || SMTP_USER;

    const subjectPrefix =
      (import.meta as any).env?.INTAKE_SUBJECT_PREFIX ||
      process.env.INTAKE_SUBJECT_PREFIX ||
      "Resync Intake";

    const subject = `${subjectPrefix}: ${validation.data.projectType} — ${validation.data.name}`;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Resync Intake" <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: validation.data.email,
      subject,
      text: formatIntakeText(validation.data),
      html: formatIntakeHtml(validation.data),
    });

    console.info("Intake submission emailed", {
      to: TO_EMAIL,
      email: validation.data.email,
      name: validation.data.name,
      projectType: validation.data.projectType,
    });

    return jsonResponse({ ok: true });
  } catch (err: any) {
    console.error("Intake API error", err?.message || err);
    return jsonResponse(
      { ok: false, error: "Server error sending message. Please try again." },
      500
    );
  }
};