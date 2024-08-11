import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideDrawerCard({ closeSidebar, data }) {
  const location = useLocation();
  const { pathname } = location;
  const MyIcon = data.icon;
  const path = data.to;
  const isActive = pathname == path;

  return (
    <Link
      onClick={() => {
        closeSidebar?.call();
      }}
      to={path}
      className='cursor-pointer select-none	'
    >
      <div
        className={
          isActive
            ? 'flex py-3 px-4 my-2 bg-my-voilet-400 rounded-xl text-neutral-1 '
            : 'flex py-3 px-4 my-2 text-neutral-9 '
        }
      >
        <MyIcon stroke={isActive ? 'white' : 'gray'} width='24' height='24' />
        <p className=' ml-3'>{data.name}</p>
      </div>
    </Link>
  );
}

export default SideDrawerCard;
