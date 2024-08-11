/* eslint-disable */
import React from 'react';

function StatusCard({ status }) {
  let className = 'bg-voilet-300  px-3 py-1 rounded-xl center';
  if (status === 'High') {
    className = 'bg-high-card px-3 py-1 rounded-xl';
  } else if (status === 'Medium') {
    className = 'bg-medium-card  text-neutral-black px-3 py-1 rounded-xl ';
  } else {
    className = 'bg-low-card  color-white px-3 py-1 rounded-xl center';
  }
  return (
    <div className='flex justify-end'>
      <span className={className}>{status}</span>
    </div>
  );
}

export default StatusCard;
