import React from 'react';

function AppHeader({ onClick }) {
  return (
    <button className='p-4' onClick={onClick}>
      <div className='w-6 h-1  my-1 bg-gray-400 rounded'></div>
      <div className='w-6 h-1  my-1 bg-gray-400 rounded'></div>
      <div className='w-6 h-1  my-1 bg-gray-400 rounded'></div>
    </button>
  );
}

export default AppHeader;
