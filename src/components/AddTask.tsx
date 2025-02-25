import React, { useState } from 'react';
import IconButton from './ui/IconButton';
import { PlusIcon } from '@heroicons/react/24/solid';

interface AddTaskProps {
  onAdd: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="flex items-center mb-4 p-4 bg-white rounded-md">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        className="flex-grow p-2 border border-gray-300 rounded-md mr-2"
        placeholder="Add a new task"
      />
      <IconButton 
        icon={<PlusIcon className="w-5 h-5 text-white" />} 
        onClick={handleAdd} 
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md"
      />
    </div>
  );
};

export default AddTask;
