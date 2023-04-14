import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { json, useSearchParams } from 'react-router-dom';
import { YOUTUBE_CHANNEL_INFO, YOUTUBE_SINGLE_VIDEO_API } from '../utils/constants';
import { AttachMoneyOutlined, ContentCutOutlined, MoreHorizOutlined, ReplyOutlined, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import RelatedVideos from './RelatedVideos';
import ButtonList from './ButtonList';
import LiveChat from './LiveChat';
import { ShimmerForWatchPage } from './Shimmer';
import Comments from './Comments';
import ChannelPage from './ChannelPage';
// import useChannelInfo from '../utils/useChannelInfo';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [ searchParamas ] = useSearchParams();
    const [ videoInfo, setVideoInfo ] = useState({});
    // const [ channelInfo, setChannelInfo ] = useState({});
    // const [ channelId, setChannelId ] = useState("");
    // const channelInfor = useChannelInfo(channelId);

    useEffect(() => {
        dispatch(closeMenu("close"));
        getVideoDetails();
    
        // console.log(searchParamas.get("v"));
        
        return () => {
            dispatch(closeMenu(true));
        }
    }, []);

    // useEffect(() => {
    //     getChannelInfo();
    //     setChannelId(videoInfo?.snippet?.channelId);
    // }, [ videoInfo ]);

    const getVideoDetails = async () => {
        const data = await fetch(YOUTUBE_SINGLE_VIDEO_API.replace("VIDEO_ID", searchParamas.get("v")));
        const details = await data.json();
        // console.log(details?.items[ 0 ]);
        setVideoInfo(details?.items[ 0 ]);
    }

    // const getChannelInfo = async () => {
    //     if (videoInfo && Object.keys(videoInfo).length !== 0) {
    //         const channelData = await fetch(YOUTUBE_CHANNEL_INFO.replace("CHANNEL_ID", videoInfo?.snippet?.channelId
    //         ));
    //         const channelDetails = await channelData.json();
    //     // console.log(channelDetails?.items[ 0 ]);
    //     // console.log(channelDetails);
    //     setChannelInfo(channelDetails?.items[ 0 ]);
    //     }
    // }


    return Object.keys(videoInfo).length == 0 ? (<ShimmerForWatchPage />) : (
      
      <div className='text-white bg-black flex w-full md:px-7 lg:px-14 mt-[64px] overflow-hidden'>
          <div className='text-white py-5 px-4 md:px-0 h-screen w-full lg:w-[68%]'>
                <iframe
                    className='w-[calc(100vw-35px)] h-[250px] md:w-[940px] md:h-[520px]'
                    src={ "https://www.youtube.com/embed/" + searchParamas.get("v") + "?autoplay=1" }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              autoPlay
              allowFullScreen
          ></iframe>
          <h1 className='mt-3 font-semibold text-lg'>{ videoInfo?.snippet?.title }</h1>
          <div className='mt-1 pl-1 md:pr-1 lg:pr-5 flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center py-3'>
            <ChannelPage channelId = {videoInfo?.snippet?.channelId} />
              <div className='flex items-center gap-1 md:gap-3 text-xs md:text-sm font-semibold md:ml-5'>
                  <button className='text-white bg-[#222222] hover:bg-[#333333] rounded-full font-semibold flex items-center py-2 md:px-1 lg:px-4 gap-1 md:gap-2'>
                      <div className='flex items-center gap-2 border-r-2 border-gray-400 px-2 md:px-0 md:pr-4'><ThumbUpAltOutlined style={{fontSize: "22px"}} /> <span className='hidden'>15K</span></div>
                      <ThumbDownAltOutlined className='mx-2' style={{fontSize: "22px"}} />
                  </button>
                  <button className='bg-[#222222] rounded-full px-2 py-2 md:px-4 md:py-2 flex items-center gap-1 hover:bg-[#333333]'><ReplyOutlined style={{fontSize: "22px"}} /> Share</button>
                  <button className='bg-[#222222] rounded-full px-2 py-2 md:px-4 md:py-2 flex items-center gap-1 hover:bg-[#333333]'><AttachMoneyOutlined style={{fontSize: "22px"}} /> Thanks</button>
                  <button className='bg-[#222222] rounded-full px-2 py-2 md:px-4 md:py-2 flex items-center gap-1 hover:bg-[#333333]'><ContentCutOutlined style={{fontSize: "22px"}} /> Clip</button>
                  <button className='p-2 rounded-full bg-[#222222] flex items-center hover:bg-[#333333]'><MoreHorizOutlined style={{fontSize: "22px"}} /></button>
              </div>
                </div>
                <div>
                    <Comments videoId={searchParamas.get("v")} />
                </div>
          </div>
          <div className='w-[32%] mt-5 px-4 hidden lg:block'>
              {/* <LiveChat /> */}
              <ButtonList className="overflow-hidden w-[50%]" isHome={false} />
              <RelatedVideos {...setVideoInfo} />
          </div>
    </div>
  )
}
 
export default WatchPage