import React from 'react';
import { CardContent } from './CardContent';

export function Card({ children, className = '', ...props }) {
  return (
    <div {...props} className={`shadow-md rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

