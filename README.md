# React TypeScript Dashboard# Getting Started with Create React App



A comprehensive dashboard application built with React, TypeScript, React Query, React Router, and Tailwind CSS.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## 🎯 Features## Available Scripts



### 1. **Authentication**In the project directory, you can run:

- Login page with form validation

- Dummy credentials: `username: admin` | `password: admin123`### `npm start`

- Protected routes using React Router

- Persistent login state with localStorageRuns the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 2. **Dashboard with 4 Feature Cards**

The page will reload if you make edits.\

#### Card 1: User & Posts Manager 📋You will also see any lint errors in the console.

- Fetches users from JSONPlaceholder API using React Query

- Displays clickable user list### `npm test`

- User detail page shows:

  - User informationLaunches the test runner in the interactive watch mode.\

  - All posts by the userSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  - All todos by the user

  - Toggle todo completion status (with persistent state)### `npm run build`

  - Completed todos styled with green background and line-through

Builds the app for production to the `build` folder.\

#### Card 2: Note Manager 📝It correctly bundles React in production mode and optimizes the build for the best performance.

- Add notes with priority levels (Important, Normal, Delayed)

- Three categorized sections for each priorityThe build is minified and the filenames include the hashes.\

- Delete notes functionalityYour app is ready to be deployed!

- Change note priority with visual indicators

- Color-coded notes:See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  - 🔴 Important (Red)

  - 🔵 Normal (Blue)### `npm run eject`

  - 🟡 Delayed (Yellow)

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

#### Card 3: Simple Analytics 📊

- Total number of usersIf you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

- User with most posts

- User with fewest postsInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

- User with most completed todos

- User with fewest completed todosYou don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

- Statistics displayed in styled, color-coded boxes

## Learn More

#### Card 4: Weather Widget 🌤️

- Real-time weather data from OpenWeatherMap APIYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- City search functionality

- Displays:To learn React, check out the [React documentation](https://reactjs.org/).

  - City name
  - Temperature (°C)
  - Weather description
  - Humidity percentage
  - Weather icon
- Loading and error states

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd dashboard-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure OpenWeatherMap API Key:**
   - Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
   - Open `src/services/api.ts`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
     ```typescript
     const WEATHER_API_KEY = 'your_actual_api_key_here';
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser:**
   - Navigate to `http://localhost:3000`
   - Login with: `admin` / `admin123`

## 📁 Project Structure

```
dashboard-app/
├── src/
│   ├── components/
│   │   ├── Analytics.tsx          # Analytics card component
│   │   ├── NoteManager.tsx        # Note manager card component
│   │   ├── ProtectedRoute.tsx     # Protected route wrapper
│   │   ├── UserPostsManager.tsx   # User list component
│   │   └── WeatherWidget.tsx      # Weather widget component
│   ├── contexts/
│   │   ├── AuthContext.tsx        # Authentication context
│   │   └── TodoContext.tsx        # Todo state management context
│   ├── pages/
│   │   ├── Dashboard.tsx          # Main dashboard page
│   │   ├── Login.tsx              # Login page
│   │   └── UserDetail.tsx         # User detail page
│   ├── services/
│   │   └── api.ts                 # API service functions
│   ├── types/
│   │   └── index.ts               # TypeScript type definitions
│   ├── App.tsx                    # Main App component with routing
│   ├── index.tsx                  # Entry point
│   └── index.css                  # Global styles with Tailwind
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies and scripts
```

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **React Query (@tanstack/react-query)** - Data fetching and caching
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - State management (Auth & Todos)

## 🎨 Design & Styling

### Color Palette
The dashboard uses a professional, cohesive color scheme:
- **Primary Dark** (#174143) - Deep teal for headers and important text
- **Primary** (#427A76) - Medium teal for buttons and interactive elements
- **Accent Orange** (#F9B487) - Warm peach for highlights and CTAs
- **Accent Cream** (#F5E5E1) - Soft cream for backgrounds and subtle accents

See `COLOR_SCHEME.md` for detailed color usage documentation.

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Grid layouts adapt to different screen sizes
- Smooth transitions and hover effects

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (⚠️ one-way operation)

## 📝 Notes

- The app uses JSONPlaceholder for demo user, post, and todo data
- Weather widget requires a valid OpenWeatherMap API key
- Todo completion states are stored in memory and persist during the app session
- Login state persists in localStorage across browser sessions

## 🎓 Learning Outcomes

This project demonstrates:
- React Router for navigation
- React Query for efficient data fetching
- Context API for state management
- TypeScript for type safety
- Tailwind CSS for rapid styling
- RESTful API integration
- Protected routes implementation
- Local state persistence

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a comprehensive React + TypeScript learning project.

---

**Happy Coding! 🚀**
