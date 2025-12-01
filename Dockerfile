FROM python:3.12-slim

WORKDIR /app

# Install build deps
RUN apt-get update && apt-get install -y --no-install-recommends build-essential && rm -rf /var/lib/apt/lists/*

# Copy requirements from the email service
COPY services/email_api/requirements.txt .
RUN python -m pip install --upgrade pip
RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy the entire repo structure so main.py can import from services/
COPY . .

EXPOSE 8000

# Run the root main.py wrapper which imports from services.email_api.main
# This allows the app to work from the repo root while keeping code organized.
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
