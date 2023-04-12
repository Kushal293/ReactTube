import React, { useEffect, useState } from 'react'
import { COMMENTS_API } from '../utils/constants';
import CommentSection from './CommentSection';

const Comments = ({videoId}) => {

    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        getComments();
    }, []);
    
    const getComments = async () => {
        const data = await fetch(COMMENTS_API.replace("uniqeId", videoId));
        const json = await data.json();
      console.log(json);
      setComments(json?.items);
    }
  return (
    <div className='bg-[#222222] px-4 py-1 mr-1 mt-4'>
      <h1 className='mt-4 mb-3 pl-2 text-lg'>Comments</h1>
      <CommentSection comments={comments} />
    </div>
  )
}

export default Comments