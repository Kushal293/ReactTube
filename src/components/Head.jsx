import React, { useEffect, useRef, useState } from 'react'
import logo from '../images/yt-logo.png'
import logoMobile from '../images/yt-logo-mobile.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCHRESULT_API, YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachingSuggestion } from '../utils/SearchSlice';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { logOut, signIn } from '../utils/authSlice';
import { signOut } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';

const Head = () => {
  const dispatch = useDispatch();
  const searchCach = useSelector(store => store.search);  
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ searchSuggestion, setSearchSuggestion ] = useState([]);
  const [ searchResult, setsearchResult ] = useState("");
  const [ showSuggestions, setShowSuggestions ] = useState(false);
  const [ isVisible, setIsVisible ] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const user = useSelector(store => store.auth?.user); 
  const isAuth = useSelector(store => store.auth?.isAuth); 
  // const auth = getAuth();

    useEffect(() => {
    
    const timer = setTimeout(() => {
      if (searchCach[searchQuery]) {
      setSearchSuggestion(searchCach[ searchQuery ]);
    } else {
      getSearchResult();
    }
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchResult = async () => {
    // const data = await fetch(YOUTUBE_SEARCHRESULT_API);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[ 1 ]);
    setSearchSuggestion(json[ 1 ]);
    dispatch(cachingSuggestion({
      [ searchQuery ]: searchResult,
    }))
  }
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  const getVideoResult = (value) => {
    navigate("results?search_query=" + value);
    setShowSuggestions(false);
  }

  const handleFocus = () => {
    inputRef.current.blur();
  }

  const signout = async () => {
        try {
           await signOut(auth);
          dispatch(logOut());
          // navigate('/signin')
        } catch (error) {
            console.log(error);
        }
    };

  
  return (
      <div className='h-[64px] flex items-center justify-between md:pl-5 pr-5 md:pr-10 py-5 bg-black fixed top-0 z-50 w-screen'>
          <div className="flex h-5 gap-10 items-center justify-center">
        <div onClick={() => handleToggleMenu()} className='hover:bg-[#222222] rounded-full p-2 cursor-pointer hidden md:flex items-center justify-center'><MenuOutlinedIcon className='text-white' /></div>
                <Link to="/" className='h-full hidden md:block'><img className='h-full cursor-pointer' src={logo} alt="logo" /></Link>
                <Link to="/" className='h-full md:hidden  ml-4 mr-2'><img className='h-full cursor-pointer' src={logoMobile} alt="logo" /></Link>
          </div>
      <div>
        <div className='flex items-center justify-center gap-2'>
          <form className='flex w-[200px] md:w-[400px] lg:w-[620px] h-10 items-center justify-center bg-black rounded-3xl overflow-hidden border-2 border-[#222222]' onSubmit={ (e) => {
            e.preventDefault();
            getVideoResult(searchQuery);
            handleFocus();
              }}>
            <input ref={inputRef} className='w-[150px] md:w-[350px] lg:w-[560px] h-full rounded-3xl rounded-r-none bg-transparent outline-none px-4 py-2 text-white text-sm placeholder:text-gray focus:border-2 focus:border-blue-800'
              value={ searchQuery }
              type="text"
              placeholder='Search'
              onChange={ (e) => setSearchQuery(e.target.value) }
              onFocus={ () => setShowSuggestions(true) }
              onBlur={ () => setShowSuggestions(false) }
            />
              <button className='w-[50px] md:w-[50px] lg:w-[60px] bg-[#222222] border-none outline-none h-full' onClick={() => getVideoResult(searchQuery)}> {/** */ }
                <SearchOutlinedIcon className='text-white' />
              </button>
        </form>
        <div className='h-10 w-10 flex items-center justify-center bg-[#222222] rounded-full'>
          <MicOutlinedIcon className='text-white cursor-pointer' style={ { fontSize: "22px" } } />
        </div>
      </div>
        {/* {
          showSuggestions && searchSuggestion.length > 0 && <div className='md:w-[350px] lg:w-[560px] bg-white font-semibold border border-gray-200 shadow-sm shadow-gray-600 fixed top-14 rounded-xl pt-3 pb-2'>
          <ul>
            {
              searchSuggestion.map((suggestion, index) => {
                return <li onMouseDown={ (e) => {
                  e.preventDefault();
                } } onClick={ () => {
                  getVideoResult(suggestion);
                  setSearchQuery(suggestion);
                  handleFocus();
                } } key={ index } className='px-4 py-1 hover:bg-[#EEEEEE] cursor-pointer'> <SearchOutlinedIcon className='mr-2' style={ { fontSize: "22px" } } /> { suggestion }</li>
                
              })
            }
          </ul>
        </div>
      } */}
      </div>
      <div className='flex items-center justify-center gap-1 md:gap-4'>
        <div className='hover:bg-[#222222] rounded-full p-1 md:p-2 cursor-pointer hidden md:flex items-center justify-center'><VideoCallOutlinedIcon className='text-white' /></div>
        <div className='hover:bg-[#222222] rounded-full p-1 md:p-2 cursor-pointer hidden md:flex items-center justify-center'><NotificationsNoneOutlinedIcon className='text-white' /></div>
        <Link>
        <div className='relative cursor-pointer ml-2 h-9 w-9 rounded-full flex items-center justify-center text-white text-lg bg-blue-500'>
            <button title={ user?.email } onClick={() => setIsVisible(!isVisible)}><h1>{ user?.email?.charAt(0).toUpperCase() }</h1></button>
            <ul className={`absolute -bottom-14 w-40 right-1 bg-[#333333] p-3 rounded-lg ${isVisible ? "" : "hidden"}`}>
              <li className='text-base font-semibold text-gray-300' onClick={signout}>{isAuth ? "Sign Out" : "Sign In"}</li>
            </ul>
        </div></Link>
          </div>
    </div>
  )
}

export default Head