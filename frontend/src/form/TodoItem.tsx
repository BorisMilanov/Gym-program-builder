import React from 'react';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


import './TodoLi.css'
import { Checkbox } from '@mui/material';
interface Task {
  _id: string;
  task: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onUpdate, onDelete }) => {
  const toggleComplete = async () => {
    try {
      const updatedTask = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        completed: !task.completed,
      });
      onUpdate(updatedTask.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
  
 
      <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }} className='todo li'>
      <p className='kilo'>Kilograms {task.task}</p>
      
      <Checkbox className='complete-btn'
        checked={task.completed}
        onChange={toggleComplete}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <IconButton className='trash-btn' aria-label="delete" onClick={deleteTask}>
        <DeleteIcon />
      </IconButton></li>
    
  );
};

export default TodoItem;