import React from 'react'
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
      <div className='flex bg-black z-10 w-screen overflow-hidden max-w-full'>
          <Sidebar />
          <Outlet />
    </div>
  )
}

export default Body