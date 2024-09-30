import React, { useState } from 'react';
import axios from 'axios';

interface TodoFormProps {
  onTaskAdded: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onTaskAdded }) => {
  const [task, setTask] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === '') return;

    try {
      await axios.post('http://localhost:5000/api/tasks', { task });
      setTask(''); // Clear the input field
      onTaskAdded(); // Call the callback function to refresh the list
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
