import React from 'react';
import { useState } from 'react';
import TodoForm from './form/TodoForm';
import TodoList from './form/TodoLIst';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Trigger a re-fetch of tasks
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm onTaskAdded={handleTaskAdded} />
      <TodoList key={refresh} />
    </div>
  );
};

export default App;