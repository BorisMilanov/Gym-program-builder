import React from 'react';
import axios from 'axios';

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

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      onDelete(task._id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      {task.task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TodoItem;