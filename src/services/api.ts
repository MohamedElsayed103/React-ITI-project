import axios from 'axios';
import { User, Post, Todo, WeatherData } from '../types';

const API_BASE = 'https://jsonplaceholder.typicode.com';
const WEATHER_API_KEY = 'fd30b1027a513b8fe3b4bccfafb40b7d';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE}/users`);
  return response.data;
};

export const fetchUser = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${API_BASE}/users/${id}`);
  return response.data;
};

export const fetchUserPosts = async (userId: number): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_BASE}/posts?userId=${userId}`);
  return response.data;
};

export const fetchUserTodos = async (userId: number): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(`${API_BASE}/todos?userId=${userId}`);
  return response.data;
};

export const fetchAllPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_BASE}/posts`);
  return response.data;
};

export const fetchAllTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(`${API_BASE}/todos`);
  return response.data;
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
  );
  return response.data;
};
