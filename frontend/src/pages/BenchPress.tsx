import React from 'react';
import { useState } from 'react';
import TodoList from '../form/TodoList';
import TodoForm from '../form/TodoForm';
import './BenchPress.css'
const BenchPress: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleTaskAdded = () => {
      setRefresh(!refresh); // Trigger a re-fetch of tasks
    };
  return (<>
    <div className='core'>
      <h1>Bench Press</h1>
      <TodoForm onTaskAdded={handleTaskAdded} />
      <TodoList key={refresh} />
    </div></>
  );
};

export default BenchPress;