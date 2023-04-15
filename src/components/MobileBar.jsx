import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { WatchLaterOutlined } from '@mui/icons-material';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { Link } from 'react-router-dom';

const MobileBar = ({device}) => {
    
    const [ activeBtn, setActiveBtn ] = useState("Home");
  
    const handleClick = (value) => {
    setActiveBtn(value);
    };
    
  return (
    <div className={ `flex text-white text-[11px] ${ device === "mobile" ? "fixed items-center justify-between bottom-0 flex-row w-screen px-6 py-2 md:hidden bg-black overflow-x-hidden" : "h-screen w-32 flex-col sticky top-[60px] py-3 pr-2 pl-2 gap-6 items-center" }` }>
      <Link to='/'>
      <div onClick={() => handleClick("Home")} className={`flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${activeBtn === "Home" ? "text-red-500" : "text-white"}`}>
        <HomeIcon />
        <h3>Home</h3>
        </div>
        </Link>
      <Link to='/subscriptions'>
        <div onClick={ () => handleClick("Subscriptions") } className={ `flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${ activeBtn === "Subscriptions" ? "text-red-500" : "text-white" }` }>
        <SubscriptionsOutlinedIcon />
        <h3>Subscriptions</h3>
      </div>
        </Link>
      <Link to='/watchlater'>
        <div onClick={ () => handleClick("Shorts") } className={ `flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${ activeBtn === "Shorts" ? "text-red-500" : "text-white" }` }>
        <WatchLaterOutlined />
        <h3>Watch Later</h3>
        </div>
        </Link>
      <Link to='/history'>
        <div onClick={ () => handleClick("Library") } className={ `flex flex-col gap-1 justify-center items-center mt-2 cursor-pointer hover:text-red-500 transition ${ activeBtn === "Library" ? "text-red-500" : "text-white" }` }>
        <HistoryOutlinedIcon />
        <h3>History</h3>
        </div>
        </Link>
    </div>
  )
}

export default MobileBar