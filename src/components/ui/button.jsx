import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button {...props} className={`bg-rose-600 hover:bg-rose-700 text-white font-semibold ${className}`}>
      {children}
    </button>
  );
}

