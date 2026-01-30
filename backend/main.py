import os
from datetime import datetime

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

load_dotenv()

app = FastAPI(title="Portfolio Email API")

# ---------- CORS ----------
def parse_origins():
    raw = os.getenv("FRONTEND_URLS", "")
    return [u.strip() for u in raw.split(",") if u.strip()]

origins = parse_origins() or ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- Health for monitors ----------
@app.api_route("/", methods=["GET", "HEAD"])
def root():
    return {"status": "ok"}

@app.api_route("/health", methods=["GET", "HEAD"])
def health():
    return {"status": "healthy"}

# ---------- Request Model ----------
class EmailRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

# ---------- Email API ----------
@app.post("/api/send-email")
async def send_email(data: EmailRequest):
    MSG91_AUTHKEY = os.getenv("MSG91_AUTHKEY")
    MSG91_DOMAIN = os.getenv("MSG91_DOMAIN", "mail.ankus.dev")

    if not MSG91_AUTHKEY:
        raise HTTPException(status_code=500, detail="Email service not configured")

    payload = {
        "recipients": [
            {
                "to": [{"email": "hi@ankus.dev", "name": "Aditya Kumar"}],
                "variables": {
                    "sender_name": data.name,
                    "sender_email": data.email,
                    "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "message": data.message,
                },
            }
        ],
        "from": {"email": f"no-reply@{MSG91_DOMAIN}"},
        "domain": MSG91_DOMAIN,
        "reply_to": [{"email": data.email}],
        "template_id": "contact_me",
    }

    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://control.msg91.com/api/v5/email/send",
                headers={
                    "Content-Type": "application/json",
                    "authkey": MSG91_AUTHKEY,
                },
                json=payload,
                timeout=15,
            )

        if response.status_code == 200:
            return {"success": True, "message": "Email sent successfully"}

        return {
            "success": False,
            "error": response.json().get("message", "Failed to send email"),
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
