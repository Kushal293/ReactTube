import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCHRESULT_API } from '../utils/constants';

const VideoResults = () => {
    const [search_query] = useSearchParams();
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        // console.log(search_query.get("search_query"));
        getVideos();
    }, [search_query]);

    // useEffect(() => {
    //     getChannelInfo();
    // }, [videos])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_SEARCHRESULT_API.replace("surfing", search_query.get("search_query")));
        const details = await data.json();
        // console.log(details);
        // console.log(details?.items);
        setVideos(details?.items);
    }

    // const getChannelInfo = async () => {
    //     if (videoInfo && Object.keys(videoInfo).length !== 0) {
    //         const channelData = await fetch(YOUTUBE_CHANNEL_INFO.replace("CHANNEL_ID", video.channelId
    //         ));
    //         const channelDetails = await channelData.json();
    //     // console.log(channelDetails?.items[ 0 ]);
    //     // console.log(channelDetails);
    //     // setChannelInfo(channelDetails?.items[ 0 ]);
    //         return channelDetails?.items[ 0 ];
    //     }
    // }

  return (
      <div className='text-white bg-black px-4 md:px-20 py-10 mt-5'>
          {
              videos.map((video) => {
                  return (video?.id?.kind === "youtube#channel" ?
                      <div className='flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-400 py-10 w-full mb-8 gap-3 md:gap-0' key={ video.etag }>
                          <div className='flex-1 flex items-center justify-center'>
                            <img className='h-40 rounded-full' src={ video.snippet.thumbnails.medium.url } alt="" />
                          </div>
                          <div className='flex-1 flex items-center pl-2 md:pl-0'>
                              <div className='flex flex-col gap-8'>
                                  <h1 className='text-xl font-semibold'>{ video.snippet.channelTitle }</h1>
                              <span className='text-sm text-gray-400 font-semibold'>{ video.snippet.description}</span>
                              </div>
                              <button className='bg-white text-black font-semibold text-sm ml-5 px-5 py-[10px] rounded-full hover:bg-slate-300'>Subscribe</button>
                          </div>
                    </div> :
                      
                      <div className='my-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-5 border-b-[1px] border-gray-500 md:border-none py-2 md:py-0' key={video.etag}>
                          <Link to={"/watch?v=" + video?.id?.videoId}>
                          <div className='flex items-center md:w-[360px] md:h-[202px]'>
                              <img className='w-full h-full rounded-xl' src={video.snippet.thumbnails.medium.url} alt="video thumbnails" />
                          </div>
                          </Link>
                          <div className='flex flex-col gap-2 md:gap-10 font-semibold px-3 md:px-0'>
                              <Link to={"/watch?v=" + video?.id?.videoId}><h1>{ video?.snippet?.title }</h1></Link>
                              <Link to="/"><span className='text-sm text-gray-400 hover:text-gray-200'>{ video?.snippet?.channelTitle }</span></Link>
                              <span className='text-xs text-gray-400 hidden md:block'>{ video?.snippet?.description }</span>
                          </div>
                      </div>
                      
                  );
})
          }
    </div>
  )
}

export default VideoResults