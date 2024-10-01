import React, { useState } from 'react';
import axios from 'axios';
import bench from '../pages/benchpress.png'
import './TodoForm.css'
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
      className='inp-Exersice'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit" className='saveBtn'>
      <img
          src={bench}// Replace with your image URL
          alt="submit"
          // onClick={handleSubmit}
          style={{ cursor: 'pointer', marginTop: '10px' }}
        /></button>
    </form>
  );
};

export default TodoForm;
