# 🌤️ Weather Widget API Key Troubleshooting

## Current Issue
Your OpenWeatherMap API key is showing as **invalid (401 error)**.

## Why This Happens

### Most Common Reason: New API Keys Need Time to Activate
OpenWeatherMap API keys are **not instantly active**. After signing up:
- ⏱️ Activation time: **10 minutes to 2 hours**
- 📧 You must verify your email first
- ✅ The key will automatically activate after verification

## Steps to Fix

### Option 1: Wait for Activation (Recommended)
1. ✅ Check your email for OpenWeatherMap verification
2. ✅ Click the verification link
3. ⏳ Wait 10-120 minutes for activation
4. 🔄 Try the weather widget again

### Option 2: Verify Your Current Key
1. Go to: https://home.openweathermap.org/api_keys
2. Login to your account
3. Check if your key shows "Active" status
4. If not active, wait or generate a new one

### Option 3: Get a New API Key
1. Visit: https://openweathermap.org/api
2. Sign up for a free account (if you haven't)
3. Go to your API keys page
4. Generate a new key
5. **Verify your email**
6. **Wait 10-120 minutes**
7. Copy the new key to `src/services/api.ts`

## How to Test Your API Key

### Test in Browser
Open this URL (replace with your key):
```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
```

**If working:** You'll see JSON weather data  
**If not working:** You'll see `{"cod":401, "message": "Invalid API key"}`

### Test in Terminal
```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric"
```

## Current API Key in Your Project
Location: `src/services/api.ts`

```typescript
const WEATHER_API_KEY = 'b6232040820793d400bc3671404d2138';
```

## Once Your Key is Active

The weather widget will work perfectly! It will show:
- ✅ City name
- ✅ Current temperature (°C)
- ✅ Weather description
- ✅ Humidity percentage
- ✅ Weather icon

## Free Tier Limits
OpenWeatherMap free plan includes:
- 1,000 API calls per day
- 60 calls per minute
- Current weather data
- More than enough for this project!

## Alternative: Use a Demo Mode

If you want to test the UI without waiting, I can create a demo mode with mock data. Just let me know!

---

**Need help?** The error message in the app will now show exactly what's wrong and how to fix it.
