import React from 'react';
import './index.css'; // Tailwind

const Widget = ({ theme = 'light', username = 'guest' }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h1 className="text-xl font-bold">Hello, {username}!</h1>
      <p>Welcome to our widget!</p>
    </div>
  );
};

export default Widget;
