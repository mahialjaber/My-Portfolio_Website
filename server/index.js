/**
 * Contact API — Express + Nodemailer
 * POST /api/contact  { name, email, subject, message, _hp }
 *
 *   cd server && npm install && cp .env.example .env && npm start
 */
'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(helmet());
app.use(express.json({ limit: '16kb' }));
app.use(
  cors({
    origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
      .split(',')
      .map((s) => s.trim()),
    methods: ['POST', 'GET'],
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many messages from this IP. Try again in 15 minutes.' },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const clean = (v) => String(v == null ? '' : v).trim();
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function validate(body) {
  const errors = {};
  const name = clean(body.name);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);

  if (name.length < 2 || name.length > 80) errors.name = 'Name must be 2–80 characters.';
  if (!EMAIL_RE.test(email) || email.length > 160) errors.email = 'Enter a valid email address.';
  if (subject.length > 140) errors.subject = 'Subject must be under 140 characters.';
  if (message.length < 20 || message.length > 4000) errors.message = 'Message must be 20–4000 characters.';
  if (/\r|\n/.test(name + email + subject)) errors.name = 'Invalid characters.';

  return { errors, data: { name, email, subject: subject || 'Portfolio contact', message } };
}

let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  return transporter;
}

app.get('/api/health', (_req, res) => res.json({ ok: true, uptime: process.uptime() }));

app.post('/api/contact', limiter, async (req, res) => {
  // Honeypot: bots fill hidden fields. Answer 200 so they do not retry.
  if (clean(req.body._hp)) return res.status(200).json({ ok: true });

  const { errors, data } = validate(req.body || {});
  if (Object.keys(errors).length) return res.status(422).json({ ok: false, errors });

  try {
    await getTransporter().sendMail({
      from: `"Portfolio contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO || 'mahialjaber.dev@gmail.com',
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `[Portfolio] ${data.subject}`,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
      html: `<p><strong>${escapeHtml(data.name)}</strong> &lt;${escapeHtml(data.email)}&gt;</p>
<pre style="font:14px/1.6 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(data.message)}</pre>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[contact] send failed:', err.message);
    return res.status(502).json({ ok: false, error: 'Mail delivery failed. Please email directly.' });
  }
});

app.use((_req, res) => res.status(404).json({ ok: false, error: 'Not found' }));

const port = Number(process.env.PORT || 8787);
app.listen(port, () => console.log(`contact API listening on :${port}`));
