import React, { useRef } from 'react'
import "./VideoPlayer.css"
import Colleage from "../../assets/Colleage.mp4"

const VideoPlayer = ({playState ,setPlayState}) => {

  const player=useRef(null)

  const ClosePlayer=(e)=>{
    if(e.target===player.current){
      setPlayState(false)
    }
  }
  return (
    <div className={`VideoPlayer ${playState? ' ' : 'hide' }`} ref={player} onClick={ClosePlayer}>
      
      <video className='' src={Colleage} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
