import React, { useState } from 'react'

const VideoCard = ({ channelTitle, thumbnails, title, viewCount, publishedAt, min }) => {

    const timeInSec = (Date.now() - Date.parse(publishedAt)) / 1000;
    const timeInMin = timeInSec / 60;
    const timeInHours = timeInMin / 60;
    const timeInDays = timeInHours / 24;
    const timeInMonths = timeInDays / 30;
    const timeInYears = timeInMonths / 12;

  // const time = timeInHours;
  let time = timeInHours;
  if (timeInSec < 60) {
    time = Math.floor(timeInSec) + " seconds";
  } else if (timeInMin < 60) {
    time = Math.floor(timeInMin) + " minutes";
  } else if (timeInHours < 24) {
    time = Math.floor(timeInHours) + " hours";
  } else if (timeInDays < 30) {
    time = Math.floor(timeInDays) + " days";
  } else if (timeInMonths < 12) {
    time = Math.floor(timeInMonths) + " months";
  } else {
    time = Math.floor(timeInYears) + " hours";
  }
  // const [ time, setTime ] = useState(timeTemp);
  // switch (timeTemp) {
  //   case timeInSec <= 59:
  //     timeTemp = timeInSec;
  //     break;
  //   case timeInMin <= 59:
  //     timeTemp = timeInMin;
  //     break;
  //   case timeInHours <= 24:
  //     timeTemp = timeInHours;
  //     break;
  //   case timeInDays <= 29:
  //     timeTemp = timeInDays;
  //     break;
  //   case timeInMonths <= 11:
  //     timeTemp = timeInMonths;
  //     break;
  //   default:
  //     timeTemp = timeInYears;
  //     break;
  // };
  // setTime(timeTemp);
  return (
      
          <div className='text-white mb-10 cursor-pointer'>
          <img className={`rounded-2xl md:rounded-lg w-[92%] h-[190px] ${min ? "h-fit w-fit" : "md:h-[165px] lg:h-[200px]"}`} src={thumbnails?.medium?.url} alt="thumbnails" />
          <div className='flex gap-4 mt-3'>
              <img className='h-10 w-10 rounded-full object-cover' src={thumbnails?.default?.url} alt="" />
              <div>
                  <h3 className='line-clamp max-w-[90%] mb-1 font-semibold'>{ title }</h3>
                  <p className='text-[12px] font-semibold text-gray-400'>{ channelTitle }</p>
                  <p className='text-[12px] font-semibold text-gray-400'>{ viewCount } views &middot; {time} ago</p>
              </div>
          </div>
    </div>
      
  )
}

export default VideoCard