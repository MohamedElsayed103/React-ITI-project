import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeather } from '../services/api';

const WeatherWidget: React.FC = () => {
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', searchCity],
    queryFn: () => fetchWeather(searchCity),
    enabled: !!searchCity,
    retry: false,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      setSearchCity(city.trim());
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!city.trim()}
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-3"></div>
          <p className="text-primary">Fetching weather...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p className="font-semibold mb-2">⚠️ Weather Data Error</p>
          {(error as any).response?.status === 404 ? (
            <>
              <p className="text-sm">City not found. Please check the spelling and try again.</p>
              <p className="text-xs mt-2 text-gray-600">Try: "London", "Cairo", "New York", "Tokyo"</p>
            </>
          ) : (error as any).response?.status === 401 ? (
            <>
              <p className="text-sm font-semibold">Invalid API Key</p>
              <p className="text-xs mt-2">Your OpenWeatherMap API key is invalid or not activated yet.</p>
              <div className="mt-3 text-xs bg-yellow-50 border border-yellow-300 rounded p-2">
                <p className="font-semibold">Possible solutions:</p>
                <ul className="list-disc ml-4 mt-1 space-y-1">
                  <li>Wait 10 minutes - 2 hours for new keys to activate</li>
                  <li>Verify your email at OpenWeatherMap</li>
                  <li>Check your API key in the OpenWeatherMap dashboard</li>
                  <li>Get a new key at: <a href="https://openweathermap.org/api" target="_blank" className="text-blue-600 underline">openweathermap.org/api</a></li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm">Error fetching weather data</p>
              <p className="text-xs mt-2">{(error as Error).message}</p>
            </>
          )}
        </div>
      )}

      {/* Weather Data Display */}
      {data && !isLoading && (
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-3xl font-bold">{data.name}</h3>
              <p className="text-accent-cream capitalize">{data.weather[0].description}</p>
            </div>
            {data.weather[0].icon && (
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt={data.weather[0].description}
                className="w-20 h-20"
              />
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm text-accent-cream">Temperature</p>
              <p className="text-3xl font-bold">{Math.round(data.main.temp)}°C</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm text-accent-cream">Humidity</p>
              <p className="text-3xl font-bold">{data.main.humidity}%</p>
            </div>
          </div>
        </div>
      )}

      {/* Initial State */}
      {!searchCity && !isLoading && !error && (
        <div className="text-center py-8 text-gray-500">
          <p className="text-4xl mb-3">🌤️</p>
          <p>Enter a city name to get weather information</p>
          <p className="text-xs mt-4 text-gray-400">
            ⚠️ Remember to add your API key in src/services/api.ts
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
