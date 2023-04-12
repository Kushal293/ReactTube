import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_INFO } from '../utils/constants';

const OutlookVideo = ({snippet, statistics}) => {
    const [ singleVideo, setSingleVideo ] = useState({});
    
    useEffect(() => {
        getChannelData();
    }, []);

    const getChannelData = async () => {
        const data = await fetch(YOUTUBE_CHANNEL_INFO.replace("CHANNEL_ID", snippet?.channelId));
        const json = await data.json();
        console.log(json);
        setSingleVideo(json.items[ 0 ]);
    }
  return (
      <div className='mb-4 flex items-center gap-2'>
          <div className='w-2/5'>
              <img className='h-24 rounded-lg w-full' src={snippet.thumbnails.medium.url} alt="video thumbnail" />
          </div>
          <div className='w-3/5'>
              <h1 className='line-clamp text-sm font-semibold mb-2'>{ snippet.title }</h1>
              <span className='text-xs text-gray-400 font-semibold block'>{ snippet.channelTitle }</span>
              <span className='text-xs text-gray-400 font-semibold block'>{ snippet.publishedAt }</span>
          </div>
    </div>
  )
}

export default OutlookVideo