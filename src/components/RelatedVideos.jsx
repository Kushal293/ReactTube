import React, { useEffect, useState } from 'react'
import { YOUTUBE_RELATED_VIDEOS_API } from '../utils/constants';
import { ShimmerForRelatedVideos } from './Shimmer';

const RelatedVideos = ({ id }) => {

    const [ videos, setVideos ] = useState([]);
    
    useEffect(() => {
        getRelatedVideos();
    }, []);

    const getRelatedVideos = async () => {
        const data = await fetch(YOUTUBE_RELATED_VIDEOS_API.replace("id", id));
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
    }
    return videos.length == 0 ? <ShimmerForRelatedVideos /> : (
      
      <div className='text-white bg-black pt-3'>
          { videos.map((video) => (
              <div key={ video?.id?.videoId } className='mb-4 flex items-center gap-2'>
          <div className='w-[45%]'>
              <img className='h-24 rounded-lg w-full' src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
          </div>
          <div className='w-[55%]'>
              <h1 className='line-clamp text-sm font-semibold mb-2'>{ video.snippet.title }</h1>
              <span className='text-xs text-gray-400 font-semibold block'>{ video.snippet.channelTitle }</span>
              <span className='text-xs text-gray-400 font-semibold block'>{ video.snippet.publishedAt }</span>
          </div>
    </div>
          ))}
    </div>
  )
}

export default RelatedVideos