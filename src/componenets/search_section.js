/* eslint-disable */
import React from 'react';
import magnifier from '../assets/Magnifer.svg';

function SearchSection() {
  return (
    <div className='py-2'>
      <div className='text-white flex'>
        <div className='flex-auto'>
          <h3 className='text-neutral-6 text-lg'>Repositories</h3>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='hidden md:flex items-center'>
            {/* Magnifier Image */}
            {/* <img
              src={magnifier}
              alt='Search'
              className='bg-my-voilet-500 py-1  px-1 rounded-s-md '
            /> */}
            {/* Search Input */}
            <input
              type='text'
              style={{
                backgroundImage: `url(${magnifier}) `,
                backgroundSize: '20px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '30px',
                backgroundPosition: 'left',
                backgroundPositionX: '7px',
              }}
              className='bg-my-voilet-500 text-dark-secondary  px-1  py-1 rounded-md '
              placeholder='Search repositories...'
            />
          </div>
          <div>
            <button className='bg-primary px-4 py-1 rounded-md text-sm'>
              Add repositories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
