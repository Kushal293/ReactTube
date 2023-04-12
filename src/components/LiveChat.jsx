import { AccountCircleOutlined, ExpandMoreOutlined, LocalAtmOutlined, MoreVertOutlined, SendOutlined, SentimentVerySatisfiedOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../utils/chatSlice';
import { generateMessage, generateName } from '../utils/helper';

const LiveChat = () => {
  const [ liveMessage, setLiveMessage ] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector(store => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(getMessages({
        name: generateName(),
        message: generateMessage(20),
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='border border-[#333333] h-[570px] w-full rounded-2xl overflow-hidden mb-3'>
        <div className='flex justify-between px-6 py-3 border-b-2 border-[#333333] bg-[#202020]'>
            <h1 className='font-semibold text-gray-200 cursor-pointer'>Top chat<ExpandMoreOutlined /></h1>
            <span className='cursor-pointer text-gray-400 hover:text-white'><MoreVertOutlined /></span>
        </div>
          <div className='container container-dark livechat flex flex-col-reverse gap-2 h-[370px] bg-[#181818] px-6 pb-2 overflow-y-scroll'>
        {
          messages.map((message, index) => (
            <div className='flex gap-4 items-start' key={index}>
              <AccountCircleOutlined />
              <div className='text-sm'>
                <span className='text-[#BABABA] font-semibold mr-3'>{ message.name }</span>
                <span>{ message.message }</span>
              </div>
            </div>
          ))
            }
          </div>
          <div className='h-[150px] bg-[#202020] w-[full] border-t-2 border-[#333333] px-6'>
              <div className='py-3 flex gap-4 items-start'>
                <div className='cursor-pointer h-7 w-8 mt-1 rounded-full flex items-center justify-center text-white text-xs font-semibold bg-blue-500'>
                    <h1>K</h1>
                  </div>
                  <div className='w-full'>
                      <h3 className='font-semibold text-sm text-[#BABABA]'>Kushal Mehta</h3>
            <form className='border-b-2 pb-[2px] border-[#555555] w-full' onSubmit={ (e) => {
              e.preventDefault();
              dispatch(getMessages({
                name: "Kushal Mehta",
                message: liveMessage,
              }))
              setLiveMessage("");
                      }}>
                          <input className='border-none bg-transparent outline-none w-full text-[13px] font-semibold placeholder:text-sm placeholder:font-semibold' type="text" placeholder='Say something...' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                      </form>
                  </div>
        </div>
        <div className='flex justify-between items-center pb-2'>
          <div><SentimentVerySatisfiedOutlined className='mr-3 cursor-pointer' /> <LocalAtmOutlined className='cursor-pointer' /></div>
          <div className='flex gap-3 text-sm font-semibold text-[#BABABA]'><span>0/200</span> <SendOutlined className='text-white cursor-pointer' onClick={ (e) => {
            dispatch(getMessages({
              name: "Kushal Mehta",
              message: liveMessage,
            }));
            setLiveMessage("");
          }} /></div>
        </div>
        <h1 className='flex items-center justify-center p-2 font-semibold text-[#BABABA] border-t-[1px] border-[#333333] cursor-pointer hover:text-white'>Hide chat</h1>
      </div>
    </div>
  )
}

export default LiveChat