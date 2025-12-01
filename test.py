"""Safe test sender.

Reads SMTP settings from environment variables and validates inputs.
Recommended: set SMTP_PASSWORD to a Google App Password (if using Gmail) or run MailHog locally for dev.
"""

import os
import smtplib
from email.message import EmailMessage

# Config from environment with sensible defaults for local dev
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER", "malihamehnazcse@gmail.com")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")
TO_ADDR = os.environ.get("TO_ADDR", SMTP_USER)
EMAIL_DRY_RUN = os.environ.get("EMAIL_DRY_RUN", "false").lower() in ("1", "true", "yes")

def _valid_email(addr: str) -> bool:
    if not addr or "@" not in addr:
        return False
    local, _, domain = addr.partition("@")
    return bool(local) and bool(domain) and "." in domain

if not _valid_email(TO_ADDR):
    raise SystemExit(f"ERROR: invalid recipient address: {TO_ADDR}")

if EMAIL_DRY_RUN:
    print("Dry-run mode enabled. Email will not be sent. Payload below:")
    print("From:", SMTP_USER)
    print("To:", TO_ADDR)
    print("Subject: Test email from Python")
    print("Body: Hello — this is a test sent via Gmail SMTP (app password).")
    raise SystemExit(0)

if SMTP_HOST not in ("localhost", "127.0.0.1") and not SMTP_PASSWORD:
    raise SystemExit("ERROR: SMTP_PASSWORD is required for non-local SMTP servers. Create an App Password and set SMTP_PASSWORD environment variable.")

msg = EmailMessage()
msg["Subject"] = "Test email from Python"
msg["From"] = SMTP_USER
msg["To"] = TO_ADDR
msg.set_content("Hello — this is a test sent via Gmail SMTP (app password).")

print(f"Connecting to SMTP {SMTP_HOST}:{SMTP_PORT} as {SMTP_USER} -> sending to {TO_ADDR}")

with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as smtp:
    smtp.ehlo()
    # Use STARTTLS for non-SSL port
    if SMTP_PORT != 465:
        try:
            smtp.starttls()
            smtp.ehlo()
        except Exception:
            print("Warning: STARTTLS failed; continuing without it")

    # MailHog/local SMTP typically doesn't require auth
    if SMTP_HOST in ("localhost", "127.0.0.1"):
        smtp.send_message(msg)
    else:
        smtp.login(SMTP_USER, SMTP_PASSWORD)
        smtp.send_message(msg)

print("Sent")
