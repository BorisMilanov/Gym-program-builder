import React from 'react';
import { useState } from 'react';
import TodoList from '../form/TodoList';
import TodoForm from '../form/TodoForm';
// import logo from './benchpress.png'
import './BenchPress.css'
const BenchPress: React.FC = () => {
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleTaskAdded = () => {
        setRefresh(!refresh); // Trigger a re-fetch of tasks
    };
    return (<>
        <div className='core'>
            <h1>Bench Press</h1>
            {/* <img src={logo} alt="Logo" /> */}
            <TodoList key={refresh ? 'refresh-true' : 'refresh-false'} />
            <TodoForm onTaskAdded={handleTaskAdded} />
        </div></>
    );
};

export default BenchPress;