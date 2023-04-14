import React from 'react'

const ButtonList = ({isHome}) => {

  const buttonList = ["All", "ReactJs", "Gaming", "Podcast", "Music", "Anime", "Movies", "Comedy", "Live", "Tourism"]
  return (
    <div className={`flex items-center gap-2 py-3 ${ isHome ? "fixed" : "sticky"} top-[60px] w-full overflow-hidden bg-black`}>  {/* bg-[#0D1318]/90 */}
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