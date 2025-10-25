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
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={!city.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-3"></div>
          <p className="text-gray-600">Fetching weather...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
          <p className="font-semibold">City not found</p>
          <p className="text-sm">Please check the city name and try again.</p>
          <p className="text-xs mt-2 text-gray-600">
            Note: You need to add your OpenWeatherMap API key in src/services/api.ts
          </p>
        </div>
      )}

      {/* Weather Data Display */}
      {data && !isLoading && (
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-3xl font-bold">{data.name}</h3>
              <p className="text-blue-100 capitalize">{data.weather[0].description}</p>
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
              <p className="text-sm text-blue-100">Temperature</p>
              <p className="text-3xl font-bold">{Math.round(data.main.temp)}°C</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-sm text-blue-100">Humidity</p>
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
