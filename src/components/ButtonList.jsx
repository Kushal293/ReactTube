import React from 'react'

const ButtonList = ({isHome}) => {

  const buttonList = ["All", "ReactJs", "Gaming", "Podcast", "Music", "Anime", "Movies", "Comedy", "Live", "Tourism"]
  return (
    <div className={`flex items-center gap-2 py-3 bg-black ${ isHome ? "fixed" : "sticky"} top-[60px] w-full overflow-hidden`}>
      {
        buttonList.map((button, index) => {
          return <button className='bg-[#222222] text-white px-4 py-2 rounded-xl text-sm border-none outline-none' key={index}>
            {button}
          </button>
        })
      }
    </div>
  )
}

export default ButtonList