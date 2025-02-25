import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => {
  return (
    <button onClick={onClick} className={`icon-button ${className}`}>
      {icon}
    </button>
  );
};

export default IconButton;
