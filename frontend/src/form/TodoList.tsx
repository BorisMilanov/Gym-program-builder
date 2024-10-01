import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';

interface Task {
  _id: string;
  task: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskUpdate = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  const handleTaskDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
    
      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task._id}
            task={task}
            onUpdate={handleTaskUpdate}
            onDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
