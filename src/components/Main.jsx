import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const isMenuOpen = useSelector(state => state.app.isMenuOpen);
  return (
      <div className={`px-5 ${!isMenuOpen ? "" : "md:w-4/5 lg:w-10/12"} overflow-hidden bg-black`}>
          <ButtonList isHome={true} />
          <VideoContainer />
    </div>
  )
}

export default Main