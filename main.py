"""
Root-level entry point for Railway deployment.
This imports the FastAPI app from the email service.
"""
import sys
import os

# Add repo root to Python path
sys.path.insert(0, os.path.dirname(__file__))

# Import the app from the email service
from services.email_api.main import app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))
