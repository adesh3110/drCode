/* eslint-disable */
import React from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveDrawer from '../componenets/side_drawer';
import MobileDrawer from '../componenets/mobile_menu';

function MainLayout() {
  return (
    <div className='lg:flex'>
      <div className='min-h-screen bg-my-voilet-700 text-neutral-9 hidden lg:block'>
        <div className='px-4 pt-10 pb- h-full'>
          <ResponsiveDrawer />
        </div>
      </div>
      <div className='flex-auto bg-my-voilet-900 text-neutral-6 '>
        <MobileDrawer />
        <div className='p-6 lg:pt-10 pt-0 min-h-screen'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
