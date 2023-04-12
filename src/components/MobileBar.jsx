import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

const MobileBar = ({device}) => {
    
    const [ activeBtn, setActiveBtn ] = useState("Home");
  
    const handleClick = (value) => {
    setActiveBtn(value);
    };
    
  return (
    <div className={`flex text-white text-[11px] ${device === "mobile" ? "fixed items-center justify-between bottom-0 flex-row w-[90%] px-3 py-2 md:hidden bg-black overflow-x-hidden" : "h-screen w-32 flex-col sticky top-[60px] py-3 pr-2 pl-2 gap-6 items-center"}`}>
      <div onClick={() => handleClick("Home")} className={`flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${activeBtn === "Home" ? "text-red-500" : "text-white"}`}>
        <HomeIcon />
        <h3>Home</h3>
      </div>
      <div onClick={() => handleClick("Shorts")} className={`flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${activeBtn === "Shorts" ? "text-red-500" : "text-white"}`}>
        <MovieFilterOutlinedIcon />
        <h3>Shorts</h3>
      </div>
      <div onClick={() => handleClick("Subscriptions")} className={`flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${activeBtn === "Subscriptions" ? "text-red-500" : "text-white"}`}>
        <SubscriptionsOutlinedIcon />
        <h3>Subscriptions</h3>
      </div>
      <div onClick={() => handleClick("Library")} className={`flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${activeBtn === "Library" ? "text-red-500" : "text-white"}`}>
        <VideoLibraryOutlinedIcon />
        <h3>Library</h3>
      </div>
    </div>
  )
}

export default MobileBar