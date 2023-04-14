import React, { useEffect, useState } from 'react'
// import useChannelInfo from '../utils/useChannelInfo';
import { YOUTUBE_CHANNEL_INFO } from '../utils/constants';
import Shimmer from './Shimmer';

const ChannelPage = ({channelId}) => {
    const [ channelInfo, setChannelInfo ] = useState({});

    useEffect(() => {
        getChannelInfo();
    }, []);
    
    
    const getChannelInfo = async () => {
        // console.log(channelId);
        const data = await fetch(YOUTUBE_CHANNEL_INFO.replace("CHANNEL_ID", channelId));
        const json = await data.json();
        // console.log(json);
        setChannelInfo(json.items[0]);
    }
 
    let subscribers = channelInfo?.statistics?.subscriberCount;
    if (subscribers < 1000) {
        return;
    } else if (subscribers/1000 < 1000) {
        subscribers = Math.round((subscribers/1000)*10) / 10 + "K";
    } else {
        subscribers = Math.round((subscribers / 1000000)*10) / 10 + "M";
    }        
    


    return  (
        <div className='flex items-center justify-between md:gap-4'>
            <div className='flex items-center gap-4'>
                <img className='h-10 w-10 rounded-full' src={ channelInfo?.snippet?.thumbnails?.medium?.url } alt="channelThumbnail" />
                <div>
                    <h2 className='font-semibold -mb-1 max-w-[200px]'>{ channelInfo?.snippet?.title }</h2>
                    <span className='text-xs text-gray-400 font-semibold'>{ subscribers } subscribers</span>
                </div>
            </div>
            <button className='bg-white text-black font-semibold text-sm px-5 py-[10px] rounded-full hover:bg-slate-300'>Subscribe</button>
        </div>
  )
}

export default ChannelPage