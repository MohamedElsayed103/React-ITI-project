# Quick Setup Guide

## 🚀 How to Run the Application

1. **Open Terminal in the project folder:**
   ```
   cd E:\iti\React\dashboard-app
   ```

2. **Start the development server:**
   ```
   powershell -ExecutionPolicy Bypass -Command "npm start"
   ```

3. **Open your browser:**
   - Go to http://localhost:3000
   - Login with:
     - Username: `admin`
     - Password: `admin123`

## ⚙️ Important Configuration

### Weather Widget API Key
The Weather Widget requires an OpenWeatherMap API key to function:

1. Get a free API key from: https://openweathermap.org/api
2. Open `src/services/api.ts`
3. Replace this line:
   ```typescript
   const WEATHER_API_KEY = 'YOUR_API_KEY_HERE';
   ```
   with:
   ```typescript
   const WEATHER_API_KEY = 'your_actual_api_key';
   ```

## 📋 Features Overview

### Login Page (/)
- Credentials: admin / admin123
- Persists login state in localStorage

### Dashboard (/dashboard)
Four feature cards:

1. **User & Posts Manager** - Click any user to view details
2. **Note Manager** - Add, delete, and prioritize notes
3. **Analytics** - View user statistics
4. **Weather Widget** - Search weather by city (requires API key)

### User Detail Page (/users/:id)
- User information
- User's posts
- User's todos (click to toggle completion - state persists)

## 🛠️ Troubleshooting

### If you get PowerShell execution policy errors:
Run this command first:
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

### If the app won't start:
1. Make sure you're in the correct directory: `cd dashboard-app`
2. Ensure all dependencies are installed: `npm install`
3. Clear cache and restart: `npm cache clean --force ; npm start`

### If Tailwind styles don't appear:
The project uses Tailwind CSS v3.4.18 (v4 is not compatible with this setup)

## 📦 Installed Packages
- react & react-dom
- react-router-dom (routing)
- @tanstack/react-query (data fetching)
- axios (HTTP client)
- tailwindcss (styling)
- typescript (type safety)

## 🎯 Project Structure
```
src/
├── components/      # Reusable React components
├── contexts/        # React Context providers
├── pages/          # Page components
├── services/       # API calls
└── types/          # TypeScript type definitions
```

---
Created with React + TypeScript + Tailwind CSS
