import * as React from 'react';
import logo from '../assets/Frame 6865.svg';
import { ReactComponent as CodePulse } from '../assets/Graph New.svg';
import { ReactComponent as MyHome } from '../assets/Home 2.svg';
import { ReactComponent as MyGraph } from '../assets/Dialog.svg';
import { ReactComponent as MyChat } from '../assets/Chat  Square Code.svg';
import { ReactComponent as MySetting } from '../assets/Settings.svg';
import logout from '../assets/Logout.svg';
import Avatar from '../assets/Avatar.svg';
import SideDrawerCard from './side_drawer_card';

function ResponsiveDrawer({ closeSidebar }) {
  const infos = [
    {
      name: 'Home',
      to: '/',
      icon: MyHome,
    },
    {
      name: 'Code Review',
      to: '/code-review',
      icon: MyChat,
    },
    {
      name: 'Code Pulse',
      to: '/code-pulse',
      icon: CodePulse,
    },
    {
      name: 'AI chat Support',
      to: '/ai-chat',
      icon: MyGraph,
    },
  ];
  return (
    <div className='w-60 max-h-full h-full'>
      <div className='max-h-full h-full flex flex-col justify-between '>
        <div>
          <div className='mx-3'>
            <img src={logo} alt='logo' />
          </div>
          <div className='my-4'>
            {infos.map((info) => {
              return (
                <SideDrawerCard
                  key={info.name}
                  closeSidebar={closeSidebar}
                  data={info}
                />
              );
            })}
          </div>
        </div>
        <div className='my-4'>
          <SideDrawerCard
            closeSidebar={closeSidebar}
            data={{
              name: 'Settings',
              to: '/settings',
              icon: MySetting,
            }}
          />
          <hr className='divider-solid my-4'></hr>
          <div className='flex justify-between'>
            <div className='flex my-2'>
              <img src={Avatar} alt='Avatar' />
              <p className='text-neutral-1 my-2 mx-2'>Olivia Rhye</p>
            </div>

            <button>
              <img src={logout} alt='logout' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDrawer;
