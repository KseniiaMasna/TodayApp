import React from 'react';

interface TaskProps {
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Task: React.FC<TaskProps> = ({ text, checked, onChange }) => {
  return (
    <div className="flex justify-between items-center text-neutral-700">
      <span>{text}</span>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
    </div>
  );
};

export default Task;
