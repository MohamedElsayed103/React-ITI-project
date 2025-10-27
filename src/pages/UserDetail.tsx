import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUser, fetchUserPosts, fetchUserTodos } from '../services/api';
import { useTodoContext } from '../contexts/TodoContext';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { todoStates, toggleTodo } = useTodoContext();

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(Number(id)),
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', id],
    queryFn: () => fetchUserPosts(Number(id)),
  });

  const { data: todos, isLoading: todosLoading } = useQuery({
    queryKey: ['userTodos', id],
    queryFn: () => fetchUserTodos(Number(id)),
  });

  if (userLoading || postsLoading || todosLoading) {
    return (
      <div className="min-h-screen bg-accent-cream flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-accent-cream">
      {/* Header */}
      <header className="bg-primary-dark shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">User Details</h1>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition duration-200"
          >
            ← Back to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-t-4 border-primary">
          <h2 className="text-2xl font-bold mb-4 text-primary-dark">User Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Name:</span> {user?.name}</p>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Username:</span> @{user?.username}</p>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Email:</span> {user?.email}</p>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Phone:</span> {user?.phone}</p>
            </div>
            <div>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Website:</span> {user?.website}</p>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">Company:</span> {user?.company.name}</p>
              <p className="text-gray-600"><span className="font-semibold text-primary-dark">City:</span> {user?.address.city}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Posts Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              📝 Posts ({posts?.length || 0})
            </h2>
            <div className="max-h-96 overflow-y-auto space-y-4">
              {posts?.map((post) => (
                <div key={post.id} className="p-4 border border-accent-cream rounded-lg hover:shadow-md transition hover:border-primary">
                  <h3 className="font-semibold text-lg text-primary-dark capitalize">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{post.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Todos Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary">
            <h2 className="text-2xl font-bold mb-4 text-primary-dark border-b border-accent-cream pb-2">
              ✅ To-Dos ({todos?.length || 0})
            </h2>
            <div className="max-h-96 overflow-y-auto space-y-2">
              {todos?.map((todo) => {
                const isCompleted = todoStates[todo.id] !== undefined 
                  ? todoStates[todo.id] 
                  : todo.completed;
                
                return (
                  <div
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id, isCompleted)}
                    className={`p-3 border rounded-lg cursor-pointer transition duration-200 ${
                      isCompleted
                        ? 'bg-green-50 border-green-300 line-through text-green-700'
                        : 'bg-white border-accent-cream hover:bg-accent-cream'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={isCompleted}
                        onChange={() => {}}
                        className="mr-3 h-5 w-5 text-primary"
                      />
                      <span className={isCompleted ? 'text-green-700' : 'text-primary-dark'}>
                        {todo.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDetail;
