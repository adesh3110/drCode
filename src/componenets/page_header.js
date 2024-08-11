/* eslint-disable */
import React from 'react';

function PageHeader({ title, description }) {
  return (
    <div>
      <h1 className='text-neutral-6 text-xl'>{title}</h1>
      <p className='text-neutral-9 text-l my-1'>{description}</p>
    </div>
  );
}

export default PageHeader;
