import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import UserPostsManager from '../components/UserPostsManager';
import NoteManager from '../components/NoteManager';
import Analytics from '../components/Analytics';
import WeatherWidget from '../components/WeatherWidget';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-accent-cream">
      {/* Header */}
      <header className="bg-primary-dark shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: User & Posts Manager */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              📋 User & Posts Manager
            </h2>
            <UserPostsManager />
          </div>

          {/* Card 2: Note Manager */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              📝 Note Manager
            </h2>
            <NoteManager />
          </div>

          {/* Card 3: Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              📊 Analytics
            </h2>
            <Analytics />
          </div>

          {/* Card 4: Weather Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              🌤️ Weather Widget
            </h2>
            <WeatherWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
