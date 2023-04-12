import React, { useEffect } from 'react'
import { COMMENT_REPLIES_API } from '../utils/constants';

const CommentSection = ({ comments }) => {

  // const [ replies, setReplies ] = useState([]);

  // useEffect(() => {
  //   const data = fetch(COMMENT_REPLIES_API.replace(commentId, parentId));
  //   const json = data.json();
  //   console.log(json);
  // }, [])

  return (
    // <div>
    //   {
    //     comments.map((comment, index) => {
    //       return <ul key={ comment.id }>
    //         <li className='mx-5 p-2 border-l-2 border-[#333333]'>{ comment?.snippet?.topLevelComment.snippet.textDisplay }</li>
    //         {/* <CommentSection comments={comment?.replies?.comments} /> */ }
    //         <ul className='bg-red'>
    //           {
    //             comment?.replies?.comments.map((comment) => {
    //               return <li>{ comment.snippet.textDisplay }</li>
    //             })
    //           }
    //         </ul>
    //       </ul>
    //     })
    //   }
    // </div>
    <div>
      {
        comments.map((comment, index) => {
          return <div key={index} className="py-3 mx-4 px-1 shadow-2xl mb-2">
            <h1 className='text-sm text-gray-300'>{ comment.snippet?.topLevelComment.snippet.textDisplay }</h1>
            <div className='bg-[#333333] ml-6 pl-2 mt-4'>
              {
                (comment?.snippet?.totalReplyCount > 0) && (comment?.replies?.comments.map((comment, index) => {
                  return <ul key={index}>
                    <li className='text-sm text-gray-500'>
                      {
                        comment.snippet.textDisplay
                      }
                    </li>
                  </ul>;
                }))
              }
    </div>
          </div>
        })
      }
    </div>
  )
}

export default CommentSection