import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'
import { songsData } from '../assets/assets'

const SongItem = ({ id, name, image, desc }) => {

  const { setTrack, play } = useContext(PlayerContext)

  const handlePlay = () => {
    setTrack(songsData[id])   // 🔥 ACTUAL TRACK CHANGE
    play()                    // ▶ user interaction → allowed
  }

  return (
    <div
      onClick={handlePlay}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}

export default SongItem
