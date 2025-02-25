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
  onTaskDelete: (id: string) => void;
  onTaskEdit: (id: string, text: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskChange, onTaskDelete, onTaskEdit }) => {
  return (
    <div className="p-4">
      {tasks.map(task => (
        <div key={task.id} className="mb-2">
          <Task 
            text={task.text} 
            checked={task.checked} 
            onChange={(checked) => onTaskChange(task.id, checked)} 
            onDelete={() => onTaskDelete(task.id)}
            onEdit={(text) => onTaskEdit(task.id, text)}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
