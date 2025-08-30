import React from 'react'
import BG_video from "../assets/BG_video.mp4"; // import the file

function Video() {
  return (
    <div className='h-screen absolute'>
      <video
        src={BG_video}
        autoPlay
        loop
        muted
        playsInline
        className='fixed left-0 h-screen object-cover w-screen top-0 z-0 overflow-hidden '
      ></video>
    </div>
  )
}

export default Video