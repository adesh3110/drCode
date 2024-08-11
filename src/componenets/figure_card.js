/* eslint-disable */
import React from 'react';

function FigureCard(props) {
  const value = props.value;
  const title = props.title;
  return (
    // <div class='w-full bg-my-voilet-600 rounded-xl figure-border'>
    //   <div class='animate-pulse space-y-4'>
    //     <div class='h-24 bg-gray-300 rounded-xl'></div>
    //   </div>
    // </div>
    <div className='bg-my-voilet-600 p-4 rounded-xl figure-border select-none	'>
      <div className='text-neutral-7'>{title}</div>
      <div className='text-neutral-5'>{value}</div>
    </div>
  );
}

export default FigureCard;
