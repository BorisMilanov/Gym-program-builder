import React from 'react';
import { useState } from 'react';
import BenchPress from './pages/BenchPress';
import PullUps from './pages/PullUps';
// import TodoForm from './form/TodoForm';
// import TodoList from './form/TodoLIst';
import Navbar from './pages/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleTaskAdded = () => {
    setRefresh(!refresh); // Trigger a re-fetch of tasks
  };

  return (
    <div>
     
      {/* <h1>To-Do List</h1>
      <TodoForm onTaskAdded={handleTaskAdded} />
      <TodoList key={refresh} /> */}
       <Router>
      <Navbar />
      <Routes>
        <Route path="/bench-press" element={<BenchPress />} />
        <Route path="/pull-ups" element={<PullUps />} />
        <Route path="/" element={<h1>Welcome to the Fitness App</h1>} /> {/* Default Home Route */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;