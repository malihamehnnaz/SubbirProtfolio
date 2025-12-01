# CORS Issue: Root Cause and Fix

## What Happened

The `.env` file in `services/email_api/` contains:
```
CORS_ALLOW_ORIGIN=http://localhost:3000
```

When the Docker image is built on Railway, this `.env` is copied inside the container. At runtime, `load_dotenv()` reads it and sets the CORS value to `http://localhost:3000` — **overriding** any environment variable you set in Railway's dashboard.

This is why your Railway environment variable `CORS_ALLOW_ORIGIN` had no effect.

## Solution: Remove CORS from .env (Recommended for Production)

The `.env` file should only contain **development defaults** and **secrets** that cannot be injected via environment. CORS origins should not be hardcoded in the image.

### Option A: Remove CORS_ALLOW_ORIGIN from .env (Best Practice)

Edit `services/email_api/.env` and remove the `CORS_ALLOW_ORIGIN` lines. The file should look like:

```properties
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=malihamehnazcse@gmail.com
SMTP_PASSWORD=ibwyzfsupobkdpvv
EMAIL_FROM=malihamehnazcse@gmail.com
EMAIL_TO=malihamehnazcse@gmail.com
```

Then:
1. Commit and push the change.
2. Railway will auto-redeploy.
3. Now Railway's `CORS_ALLOW_ORIGIN` environment variable will be used.

### Option B: Keep .env with Local Defaults, Always Override on Railway

If you want to keep local defaults in `.env`, update it to:

```properties
CORS_ALLOW_ORIGIN=http://localhost:3000,http://localhost:9002
# ... other settings
```

Then on Railway, **explicitly set** `CORS_ALLOW_ORIGIN` to your desired value (e.g., `http://localhost:9002`). The Railway env var will override the `.env` value **if** the service code is modified to give priority to env vars.

But this is **not recommended** because:
- The image always contains hardcoded origins (security/clarity issue).
- You have to remember to set it on every deployment platform.

## Recommended Next Steps

1. **Remove `CORS_ALLOW_ORIGIN` from `.env`:**
   - Edit `services/email_api/.env` and delete all lines with `CORS_ALLOW_ORIGIN`.

2. **Commit and push:**
   ```bash
   git add services/email_api/.env
   git commit -m "Remove hardcoded CORS origins from .env; use Railway env vars instead"
   git push
   ```

3. **Railway will auto-redeploy.**

4. **On Railway dashboard, ensure `CORS_ALLOW_ORIGIN` is set:**
   - Key: `CORS_ALLOW_ORIGIN`
   - Value: `http://localhost:9002` (for local dev) or your production domain.

5. **Verify in Railway logs:**
   - Look for:
     ```
     Portfolio Email API started. CORS_ALLOW_ORIGIN='http://localhost:9002' -> allow_origins=['http://localhost:9002']
     ```

6. **Re-test the frontend:**
   - Open `http://localhost:9002` and submit the contact form.
   - Should work now!

## Why This Matters

- **Build-time vs. Runtime Configuration**: Docker images should not contain environment-specific settings (CORS origins, database URLs, etc.). Use environment variables instead.
- **Security**: Secrets and configuration should not be committed to git.
- **Flexibility**: The same image works in dev, staging, and production with different env vars.

---

## Quick Test After Fix

Once redeployed, run:

```powershell
# Preflight check
Invoke-WebRequest -Method Options -Uri 'https://portfolio-backend-production-0543.up.railway.app/send' `
  -Headers @{Origin='http://localhost:9002'; 'Access-Control-Request-Method'='POST'} `
  -TimeoutSec 10 | Select-Object -Property StatusCode

# POST test
Invoke-RestMethod -Method Post -Uri 'https://portfolio-backend-production-0543.up.railway.app/send' `
  -ContentType 'application/json' `
  -Body (ConvertTo-Json @{name='Test'; email='test@example.com'; message='Hello'}) `
  -TimeoutSec 10
```

Expected:
- OPTIONS returns 204 with `Access-Control-Allow-Origin: http://localhost:9002` header.
- POST returns `{ "status": "accepted" }`.
- Browser frontend works without CORS errors.
