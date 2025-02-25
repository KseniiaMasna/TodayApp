import React, { useState } from 'react';
import TaskList from "../components/TaskList.js";
import AddTask from '../components/AddTask.js';

const initialTasks = [
  { id: '1', text: 'Task 1', checked: false },
  { id: '2', text: 'Task 2', checked: true },
  { id: '3', text: 'Task 3', checked: false },
];

const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskChange = (id: string, checked: boolean) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, checked } : task));
  };


  return (
    <div>
      <TaskList 
        tasks={tasks} 
        onTaskChange={handleTaskChange}       
      />
      <AddTask
        onAdd={(text) => console.log(`Add task with text: ${text}`)}
      />
    </div>
  );
};

export default Home;