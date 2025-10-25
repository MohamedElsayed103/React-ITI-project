import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TodoState {
  [key: number]: boolean; // todoId: completed
}

interface TodoContextType {
  todoStates: TodoState;
  toggleTodo: (todoId: number, currentState: boolean) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todoStates, setTodoStates] = useState<TodoState>({});

  const toggleTodo = (todoId: number, currentState: boolean) => {
    setTodoStates(prev => ({
      ...prev,
      [todoId]: !currentState
    }));
  };

  return (
    <TodoContext.Provider value={{ todoStates, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
