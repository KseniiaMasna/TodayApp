import React from 'react';
import Task from './Task';

interface TaskItem {
  id: string;
  text: string;
  checked: boolean;
}

interface TaskListProps {
  tasks: TaskItem[];
  onTaskChange: (id: string, checked: boolean) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskChange }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="flex items-center mb-2">
          <Task 
            text={task.text} 
            checked={task.checked} 
            onChange={(checked) => onTaskChange(task.id, checked)}
            onDelete={() => console.log(`Delete task with id: ${task.id}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
