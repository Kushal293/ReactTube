import { Skeleton } from '@mui/material';
import React from 'react'

const Shimmer = () => {

  return (
      <div className='p-10 grid lg:grid-cols-3 md:grid-cols-2 mt-32'>
          {
              Array(20).fill("").map((_val, index) => (
                  <div className='mb-10' key={index}>
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rounded"
            width={360}
              height={ 200 }
              animation="wave"
              
        />

          <div className='pt-5 flex items-center gap-5'>
              <Skeleton sx={ { bgcolor: 'grey.900' } } variant='circular' width={ 40 } height={ 40 } animation="wave" />
              <div>
                  <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={290} />
                  <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={200} />
              </div>
          </div>
    </div>
              ))
          }
      </div>
  )
}

export const ShimmerForWatchPage = () => {
    return (
        <div className='p-10'>
            <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={950}
              height={ 540 }
              animation="wave"
            />
            <div className='flex items-center justify-between'>
                <div className='pt-5 flex items-center gap-5'>
              <Skeleton sx={ { bgcolor: 'grey.900' } } variant='circular' width={ 40 } height={ 40 } animation="wave" />
              <div>
                  <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={300} />
                  <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={200} />
              </div>
                </div>
                <div className='flex items-center gap-3'>
                    <Skeleton sx={ { bgcolor: 'grey.900' } } variant='rounded' width={ 80 } height={ 40 } animation="wave" />
                    <Skeleton sx={ { bgcolor: 'grey.900' } } variant='rounded' width={ 80 } height={ 40 } animation="wave" />
                    <Skeleton sx={ { bgcolor: 'grey.900' } } variant='rounded' width={ 80 } height={ 40 } animation="wave" />
                    <Skeleton sx={ { bgcolor: 'grey.900' } } variant='rounded' width={ 80 } height={ 40 } animation="wave" />
                </div>
            </div>
        </div>
    )
}

export const ShimmerForRelatedVideos = () => {
    return (
        <div className='py-2'>
            {
                Array(15).fill("").map((_val, index) => {
                    return (
                        <div className='flex items-center gap-5 mb-5' key={index}>
            <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={200}
              height={ 120 }
              animation="wave"
            />
            <div>
                <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={180} height={40} />
                  <Skeleton variant='text' sx={{bgcolor: 'grey.900', fontSize: '20px'}} animation="wave" width={100} height={35} />
            </div>
        </div>
                    )
                }) 
            }
        </div>
    )
}

export default Shimmer