import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../Context/PlayerContext'

const Player = () => {

  const {
    track,
    playStatus,
    play,
    pause,
    seekBg,
    seekBar,
    time
  } = useContext(PlayerContext)

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">

      {/* LEFT */}
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track?.image} alt="song" />
        <div>
          <p className="text-sm font-semibold">{track?.name}</p>
          <p className="text-xs text-gray-400">
            {track?.desc?.slice(0, 12)}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center gap-2 m-auto">

        <div className="flex gap-4 items-center">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} />


          {!playStatus ? (
            <img
              onClick={play}
              className="w-5 cursor-pointer"
              src={assets.play_icon}
            />
          ) : (
            <img
              onClick={pause}
              className="w-5 cursor-pointer"
              src={assets.pause_icon}
            />
          )}

          <img className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>

        <div className="flex items-center gap-3 text-xs">
          <p>
           {time.currentTime.min}:{time.currentTime.sec}
         </p>
          <div ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <div ref={seekBar} className="h-1 w-[30%] bg-green-600 rounded-full"></div>
          </div>
          <p>
           {time.totalTime.min}:{time.totalTime.sec}
         </p>
        </div>
      </div>



      <div className="hidden lg:flex items-center gap-4 opacity-70">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} />
        <div className="w-20 bg-slate-50 h-1 rounded-full cursor-pointer">
            
        </div>
        <img className="w-12 cursor-pointer" src={assets.mini_player_icon} />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} />
      
      </div>

    </div>
  )
}

export default Player
