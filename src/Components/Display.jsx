import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const displayRef = useRef()
  const location = useLocation()

  const isAlbum = location.pathname.startsWith('/album/')
  const albumId = isAlbum ? location.pathname.split('/').pop() : null
  const albumData = albumId ? albumsData[Number(albumId)] : null

  useEffect(() => {
    if (isAlbum && albumData?.bgColor) {
      displayRef.current.style.background =
        `linear-gradient(180deg, ${albumData.bgColor} 0%, #121212 100%)`
    } else {
      displayRef.current.style.background = '#121212'
    }
  }, [isAlbum, albumData])

  return (
    <div
      ref={displayRef}
      className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto
                 h-[70vh] lg:h-[90vh]"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display
