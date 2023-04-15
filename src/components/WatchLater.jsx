import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WatchLater = () => {

    const [ videos, setVideos ] = useState([]);
    const userId = useSelector(store => store.auth.user.uid);

    useEffect(() => {
        getWatchLaterVideos();
    }, []);

    const getWatchLaterVideos = async () => {
        // console.log(userId);
        // const querySnapshot = await getDocs(collection(db, "watchlater"), where("userId", "==", userId));
        // const querySnapshot = await db.collection("watchlater").where("userId", "==", userId).get();
        const q = query(collection(db, "watchlater"), where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs);
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push(doc.data());
            // console.log(doc.data());
        });
        setVideos(items);
    }

    return videos.length === 0 ? (
        <div className='text-white bg-black h-screen flex justify-center items-center w-screen'>
            <h1 className='text-3xl'>No Videos have added!</h1>
  </div>
  ) : (
      <div className='text-white px-5 py-24 md:px-10 flex flex-col gap-3 md:grid grid-cols-1 md:grid-cols-4 w-full md:gap-3'>
          { videos.map(video => {
              return (
                  <div key={video?.videoId} className='flex flex-row md:flex-col items-start justify-start gap-2 mb-3 md:mb-0'>
                      <Link to={ "/watch?v=" + video?.videoId }>
                          <div className='h-[90px] w-[160px] md:h-[150px] md:w-[260px]'>
                              <img src={ video?.videoThumbnail } alt="thumbnail" className='h-[90px] w-[160px] md:h-[150px] md:w-[260px] object-cover rounded-lg block' />
                          </div>
                      </Link>
                      <div className='flex flex-col gap-2 justify-end'>
                            <h3 className='text-[14px] font-semibold text-gray-400'>{ video?.channelName }</h3>
                            <Link to={"/watch?v=" + video?.videoId}><h3 className='line-clamp md:max-w-[90%] font-semibold text-sm'>{ video?.videoTitle }</h3></Link>
                      </div>
                  </div>
              )
          })}
    </div>
  )
}

export default WatchLater