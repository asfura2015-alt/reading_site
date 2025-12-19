import React from 'react';

export function CardContent({ children, className = '', ...props }) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
