import { useState } from 'react';
import TaskList from "../components/TaskList.js";
import AddTask from '../components/AddTask.js';
import LogoutButton from '../components/ui/LogoutButton.js';

const initialTasks = [
  { id: '1', text: 'Task 1', checked: false },
  { id: '2', text: 'Task 2', checked: true },
  { id: '3', text: 'Task 3', checked: false },
];

const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState('');

  const handleTaskChange = (id: string, checked: boolean) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, checked } : task));
  };

  const handleAdd = () => {
    if (text.trim()) {
      const newTask = { id: Date.now().toString(), text, checked: false };
      setTasks([...tasks, newTask]);
      setText('');
    }
  };

  const handleTaskDelete = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskEdit = (id: string, text: string) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text } : task));
  };

  return (
    <div>
      <TaskList 
        tasks={tasks} 
        onTaskChange={handleTaskChange}
        onTaskDelete={handleTaskDelete}
        onTaskEdit={handleTaskEdit}
      />
      <AddTask
        onClick={handleAdd}
        onChange={(e) => setText(e.target.value)}
        text={text}
      />
      <LogoutButton className="border-2 border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition duration-300" />
    </div>
  );
};

export default Home;