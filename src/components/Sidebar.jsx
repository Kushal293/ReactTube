import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieIcon from '@mui/icons-material/Movie';
import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DryCleaningOutlinedIcon from '@mui/icons-material/DryCleaningOutlined';
import { useSelector } from 'react-redux';
import MobileBar from './MobileBar';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(state => state?.app?.isMenuOpen);
  const [ activeBtn, setActiveBtn ] = useState("Home");
  const handleClick = (value) => {
    setActiveBtn(value);
  };

  if (isMenuOpen === "close") return;


  return !isMenuOpen ? (
    <MobileBar device="" />
  ) : (
    <div className='container container-dark md:w-1/5 lg:w-2/12 h-[calc(100vh-50px)] list-none bg-black text-white text-sm px-2 sticky top-[60px] hidden md:block'>
      <div className='flex flex-col px-3 py-3'>
        <Link to='/'><li onClick={() => handleClick("Home")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Home" ? "bg-[#222222]" : "bg-black"}`}><HomeIcon /> Home</li></Link>
        <li onClick={() => handleClick("Shorts")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Shorts" ? "bg-[#222222]" : "bg-black"}`}><MovieFilterOutlinedIcon /> Shorts</li>
        <Link to="subscriptions"><li onClick={() => handleClick("Subscriptions")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Subscriptions" ? "bg-[#222222]" : "bg-black"}`}><SubscriptionsOutlinedIcon /> Subscriptions</li></Link>
      </div>
      <hr className='border-none h-[2px] bg-[#222222]' />
      <div className='flex flex-col px-3 py-3'>
        <li onClick={() => handleClick("Library")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Library" ? "bg-[#222222]" : "bg-black"}`}><VideoLibraryOutlinedIcon /> Library</li>
        <Link to="history"><li onClick={() => handleClick("History")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "History" ? "bg-[#222222]" : "bg-black"}`}><HistoryOutlinedIcon /> History</li></Link>
        <li onClick={() => handleClick("Watch later")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Watch later" ? "bg-[#222222]" : "bg-black"}`}><WatchLaterOutlinedIcon /> Watch later</li>
        <li onClick={() => handleClick("Liked videos")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Liked videos" ? "bg-[#222222]" : "bg-black"}`}><ThumbUpOutlinedIcon /> Liked videos</li>
      </div>
      <hr className='border-none h-[2px] bg-[#222222]' />
      <div className='flex flex-col gap-2 px-3 py-3'>
        <h1 className='ml-2'>Subscriptions</h1>
        <div className='flex flex-col'>
          <li onClick={() => handleClick("Akshay saini")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Akshay saini" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Akshay saini</li>
          <li onClick={() => handleClick("Gate smashers")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Gate smashers" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Gate smashers</li>
          <li onClick={() => handleClick("Coders gyan")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Coders gyan</li>
          <li onClick={() => handleClick("Lama dev")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Lama dev</li>
          <li onClick={() => handleClick("Edroh")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Edroh" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Edroh</li>
          <li onClick={() => handleClick("Pedro tech")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Pedro tech" ? "bg-[#222222]" : "bg-black"}`}><AccountCircleIcon /> Pedro tech</li>
        </div>
      </div>
      <hr className='border-none h-[2px] bg-[#222222]' />
      <div className='flex flex-col gap-2 px-3 py-3'>
        <h1 className='ml-2'>Explore</h1>
        <div className='flex flex-col'>
          <li onClick={() => handleClick("Trending")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Trending" ? "bg-[#222222]" : "bg-black"}`}><WhatshotOutlinedIcon /> Trending</li>
          <li onClick={() => handleClick("Shopping")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Shopping" ? "bg-[#222222]" : "bg-black"}`}><ShoppingBagOutlinedIcon /> Shopping</li>
          <li onClick={() => handleClick("Music")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Music" ? "bg-[#222222]" : "bg-black"}`}><MusicNoteOutlinedIcon /> Music</li>
          <li onClick={() => handleClick("Films")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Films" ? "bg-[#222222]" : "bg-black"}`}><MovieIcon /> Films</li>
          <li onClick={() => handleClick("Live")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "" ? "bg-[#222222]" : "bg-black"}`}><SettingsInputAntennaOutlinedIcon /> Live</li>
          <li onClick={() => handleClick("Gaming")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Gaming" ? "bg-[#222222]" : "bg-black"}`}><SportsEsportsOutlinedIcon /> Gaming</li>
          <li onClick={() => handleClick("News")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "News" ? "bg-[#222222]" : "bg-black"}`}><NewspaperOutlinedIcon /> News</li>
          <li onClick={() => handleClick("Sport")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Sport" ? "bg-[#222222]" : "bg-black"}`}><EmojiEventsOutlinedIcon /> Sport</li>
          <li onClick={() => handleClick("Learning")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Learning" ? "bg-[#222222]" : "bg-black"}`}><LightbulbOutlinedIcon /> Learning</li>
          <li onClick={() => handleClick("Fashion & beauty")} className={`flex gap-6 p-2 rounded-xl cursor-pointer hover:bg-[#222222] items-center ${activeBtn === "Fashion & beauty" ? "bg-[#222222]" : "bg-black"}`}><DryCleaningOutlinedIcon /> Fashion & beauty</li>
        </div>
      </div>
    </div>
  )
}

export default Sidebar