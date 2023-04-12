import React, { Fragment, useEffect, useRef, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import MobileBar from './MobileBar';

const VideoContainer = () => {
  const [ videos, setVideos ] = useState([]);
  const [info, setInfo] = useState("");
  const [ pageToken, setPageToken ] = useState("");
  const isMenuOpen = useSelector(state => state?.app?.isMenuOpen);

  useEffect(() => {
    getVideos();
    console.log(videos);
}, [pageToken]);

  const getVideos = async () => {
 
    // const data = await fetch(YOUTUBE_VIDEOS_API + (pageToken?.length > 0 ? ("&pageToken=" + pageToken) : ""));
    const data = await fetch(YOUTUBE_VIDEOS_API + "&pageToken=" + pageToken);
    const json = await data.json();
    // console.log(json);
    // setInfo(json);
    setInfo(json);
    setVideos( [...videos, ...json?.items] );
  }

  const scrollToEnd = () => {
    setPageToken(info.nextPageToken);
  }

  window.onscroll = () => {
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.body.scrollTop);
    // console.log(document.body.offsetHeight);
    // console.log(document.documentElement.offsetHeight);
    // console.log("First");
   if ((window.innerHeight + document.documentElement.scrollTop) >= (document.body.offsetHeight-500)) {
     scrollToEnd();
    }
}

  return videos?.length === 0 ? (<Shimmer />) : (
    <div className='mt-24 overflow-hidden'>
      <div className={`grid grid-cols-1 w-screen overflow-hidden md:w-auto ${!isMenuOpen ? "md:grid-cols-2 lg:grid-cols-4 p-1 mt-6" : "md:grid-cols-2 lg:grid-cols-3 px-3 md:px-5 lg:px-10 py-2 mt-6 border]" }`}>
        { videos.map((video) => {
          return <Link to={"/watch?v=" + video.id}  key={ video?.etag }><VideoCard { ...video?.snippet } { ...video?.statistics } min={!isMenuOpen} /></Link>
        }) }
      </div>
      <MobileBar device="mobile" />
    </div>
  )
}

export default VideoContainer