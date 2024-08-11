/* eslint-disable */
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import AppHeader from './app_header';
import ResponsiveDrawer from './side_drawer';

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => () => setOpen(open);

  return (
    <div className='lg:hidden'>
      <AppHeader onClick={toggleDrawer(true)} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className='bg-my-voilet-700 px-4 pt-10 min-h-screen'>
          <ResponsiveDrawer closeSidebar={toggleDrawer(false)} />
        </div>
      </Drawer>
    </div>
  );
}
