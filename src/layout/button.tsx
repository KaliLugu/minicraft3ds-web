import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      className={`retro-button ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};