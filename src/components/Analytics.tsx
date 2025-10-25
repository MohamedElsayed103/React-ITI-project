import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers, fetchAllPosts, fetchAllTodos } from '../services/api';

const Analytics: React.FC = () => {
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['allPosts'],
    queryFn: fetchAllPosts,
  });

  const { data: todos, isLoading: todosLoading } = useQuery({
    queryKey: ['allTodos'],
    queryFn: fetchAllTodos,
  });

  if (usersLoading || postsLoading || todosLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!users || !posts || !todos) {
    return <div className="text-red-500">Error loading analytics data</div>;
  }

  // Calculate statistics
  const totalUsers = users.length;

  // Posts statistics
  const postsByUser = posts.reduce((acc, post) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const userWithMostPosts = Object.entries(postsByUser).reduce((max, [userId, count]) => 
    count > max.count ? { userId: Number(userId), count } : max
  , { userId: 0, count: 0 });

  const userWithFewestPosts = Object.entries(postsByUser).reduce((min, [userId, count]) => 
    count < min.count ? { userId: Number(userId), count } : min
  , { userId: 0, count: Infinity });

  // Todos statistics
  const completedTodosByUser = todos.reduce((acc, todo) => {
    if (todo.completed) {
      acc[todo.userId] = (acc[todo.userId] || 0) + 1;
    }
    return acc;
  }, {} as Record<number, number>);

  const userWithMostCompletedTodos = Object.entries(completedTodosByUser).reduce((max, [userId, count]) => 
    count > max.count ? { userId: Number(userId), count } : max
  , { userId: 0, count: 0 });

  const userWithFewestCompletedTodos = Object.entries(completedTodosByUser).reduce((min, [userId, count]) => 
    count < min.count ? { userId: Number(userId), count } : min
  , { userId: 0, count: Infinity });

  const getUserName = (userId: number) => {
    return users.find(u => u.id === userId)?.username || 'Unknown';
  };

  const StatBox: React.FC<{ title: string; value: string | number; subtitle?: string; color: string }> = ({ 
    title, 
    value, 
    subtitle, 
    color 
  }) => (
    <div className={`p-4 rounded-lg ${color} border-2`}>
      <h4 className="text-sm font-semibold text-gray-700 mb-1">{title}</h4>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Total Users */}
      <StatBox 
        title="Total Users" 
        value={totalUsers}
        color="bg-purple-100 border-purple-300"
      />

      {/* Posts Statistics */}
      <div className="grid grid-cols-2 gap-3">
        <StatBox 
          title="Most Posts" 
          value={userWithMostPosts.count}
          subtitle={`@${getUserName(userWithMostPosts.userId)}`}
          color="bg-green-100 border-green-300"
        />
        <StatBox 
          title="Fewest Posts" 
          value={userWithFewestPosts.count}
          subtitle={`@${getUserName(userWithFewestPosts.userId)}`}
          color="bg-red-100 border-red-300"
        />
      </div>

      {/* Todos Statistics */}
      <div className="grid grid-cols-2 gap-3">
        <StatBox 
          title="Most Completed Todos" 
          value={userWithMostCompletedTodos.count}
          subtitle={`@${getUserName(userWithMostCompletedTodos.userId)}`}
          color="bg-blue-100 border-blue-300"
        />
        <StatBox 
          title="Fewest Completed Todos" 
          value={userWithFewestCompletedTodos.count}
          subtitle={`@${getUserName(userWithFewestCompletedTodos.userId)}`}
          color="bg-orange-100 border-orange-300"
        />
      </div>
    </div>
  );
};

export default Analytics;
