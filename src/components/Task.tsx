import React from 'react';
import IconButton from './ui/IconButton';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface TaskProps {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ text, checked, onChange, onDelete }) => {
  return (
    <div className="flex justify-between items-center text-neutral-700 p-4 bg-neutral-50 rounded-md mb-2">
      <span className="text-base">{text}</span>
      <div className="flex items-center">
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={(e) => onChange(e.target.checked)} 
          className="mr-2"
        />
        <IconButton 
          icon={<XMarkIcon className="w-4 h-4 text-neutral-500" />} 
          onClick={onDelete} 
          className="p-1"
        />
      </div>
    </div>
  );
};

export default Task;
