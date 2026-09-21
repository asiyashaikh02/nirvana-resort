import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
  color?: string;
}

export const Emblem: React.FC<EmblemProps> = ({
  className = 'w-6 h-6',
  color = '#1e4b3e',
}) => {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center Leaf */}
      <path
        d="M50 10 C50 10, 36 32, 43 55 C46 64, 50 72, 50 72 C50 72, 54 64, 57 55 C64 32, 50 10, 50 10 Z"
        fill={color}
      />
      {/* Left Leaf */}
      <path
        d="M44 68 C44 68, 22 62, 12 45 C4 31, 10 18, 10 18 C10 18, 22 28, 30 40 C36 50, 44 68, 44 68 Z"
        fill={color}
      />
      {/* Right Leaf */}
      <path
        d="M56 68 C56 68, 78 62, 88 45 C96 31, 90 18, 90 18 C90 18, 78 28, 70 40 C64 50, 56 68, 56 68 Z"
        fill={color}
      />
    </svg>
  );
};
