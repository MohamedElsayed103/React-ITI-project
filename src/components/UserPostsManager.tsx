import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';

const UserPostsManager: React.FC = () => {
  const navigate = useNavigate();
  
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        Error loading users: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      <div className="space-y-2">
        {users?.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/users/${user.id}`)}
            className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition duration-200 transform hover:scale-102"
          >
            <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-600">@{user.username}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPostsManager;
