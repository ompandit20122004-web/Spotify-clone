import React, { createContext, useRef, useState, useEffect } from 'react'
import { songsData } from '../assets/assets'

export const PlayerContext = createContext(null)

const PlayerContextProvider = ({ children }) => {

  const audioRef = useRef(null)
  const seekBg = useRef(null)
  const seekBar = useRef(null)

  const [track, setTrack] = useState(songsData[0])
  const [playStatus, setPlayStatus] = useState(false)

  const [time, setTime] = useState({
    currentTime: { min: '0', sec: '00' },
    totalTime: { min: '0', sec: '00' }
  })

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setPlayStatus(true)
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setPlayStatus(false)
    }
  }

 
  useEffect(() => {
    if (audioRef.current && track) {
      audioRef.current.load()
    }
  }, [track])

   useEffect(() => {
    if (!audioRef.current) return

    const audio = audioRef.current

    const updateTime = () => {
      const current = audio.currentTime
      const total = audio.duration || 0

      setTime({
        currentTime: {
          min: Math.floor(current / 60),
          sec: String(Math.floor(current % 60)).padStart(2, '0')
        },
        totalTime: {
          min: Math.floor(total / 60),
          sec: String(Math.floor(total % 60)).padStart(2, '0')
        }
      })

   
      if (seekBar.current) {
        seekBar.current.style.width = `${(current / total) * 100 || 0}%`
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    return () => audio.removeEventListener('timeupdate', updateTime)
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        seekBg,
        seekBar,
        track,
        playStatus,
        setTrack,
        play,
        pause,
        time,
        setTime
        
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider
