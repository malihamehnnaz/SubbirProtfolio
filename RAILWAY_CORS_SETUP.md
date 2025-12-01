# Railway CORS Setup for Email API

Your email API on Railway is currently rejecting CORS preflight requests from your frontend during development. This guide shows how to fix it.

## The Problem

- Your frontend (running on http://localhost:9002 or a production domain) makes POST requests to the email API.
- Browsers send a preflight OPTIONS request first to check if CORS is allowed.
- The Railway backend currently doesn't include the `Access-Control-Allow-Origin` header in the preflight response.
- Result: browser blocks the POST with a CORS policy error.

## The Solution

Set the `CORS_ALLOW_ORIGIN` environment variable on Railway to include your frontend's origin.

### Option 1: Allow Development Origin Only (Recommended for Dev)

1. Open your Railway project dashboard
2. Go to **Variables** (or **Environment**)
3. Add a new variable:
   - **Key**: `CORS_ALLOW_ORIGIN`
   - **Value**: `http://localhost:9002`
4. Click **Save** or **Deploy**
5. Wait for the service to redeploy and restart

### Option 2: Allow Multiple Origins (Dev + Production)

If you want to allow both your dev environment and production:

- **Key**: `CORS_ALLOW_ORIGIN`
- **Value**: `https://your-production-domain.com,http://localhost:9002`

(Replace `https://your-production-domain.com` with your actual production domain.)

### Option 3: Allow All Origins (Temporary, Not Recommended)

For quick testing only:

- **Key**: `CORS_ALLOW_ORIGIN`
- **Value**: `*`

This allows any origin. It's insecure for production; only use for debugging.

## Verify the Fix

After setting the env var and redeploying:

1. Check Railway logs to confirm the variable was applied. You should see:
   ```
   Portfolio Email API started. CORS_ALLOW_ORIGIN='http://localhost:9002' -> allow_origins=['http://localhost:9002']
   ```

2. Reload your frontend and try submitting the contact form again
3. The CORS preflight should now succeed and your message should be sent

## Troubleshooting

If it still doesn't work after redeploy:

1. Check that the service has restarted (Railway should show a recent deployment)
2. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check Railway logs for the startup message to confirm the env var was read
4. If using the fallback option, ensure the origin exactly matches (including http vs https, port, etc.)

## How It Works

The email API reads the `CORS_ALLOW_ORIGIN` environment variable and:

- If set to `*`, allows all origins
- Otherwise, treats it as a comma-separated list of allowed origins
- Returns the appropriate `Access-Control-Allow-Origin` header in preflight and POST responses
- This tells the browser that your frontend is allowed to fetch from the API

---

**Local Development Alternative**

If you don't want to configure Railway right now, you can temporarily test locally:

1. Set your frontend to use a local backend:
   - In your Next.js `.env.local`: `NEXT_PUBLIC_EMAIL_API_URL=http://localhost:8000`
   - Or start the email API locally: `python -m services.email_api.main` (after pip install -r requirements.txt)
2. No CORS issues because both are on localhost
