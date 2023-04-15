import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import MobileBar from './MobileBar';

const Body = () => {
  return (
    <div className='flex bg-black z-10 w-screen overflow-hidden max-w-full min-h-screen'>       {/* bg-[#2c3e50]/30 */ }
          <Sidebar />
      <Outlet />
      <MobileBar device="mobile" />
    </div>
  )
}

export default Body