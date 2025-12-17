import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer'
    : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
