import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData, assets } from '../assets/assets'

const DisplayAlbum = () => {

  const { id } = useParams()
  const albumData = albumsData[id]

  if (!albumData) {
    return <div className="text-white p-6">Album not found</div>
  }

  return (
    <>
      <Navbar />

      {/* ================= Album Header ================= */}
      <div className="mt-6 md:mt-10 flex gap-6 flex-col sm:flex-row sm:items-end px-4">
        <img
          src={albumData.image}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shadow-2xl mx-auto sm:mx-0"
        />

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <p className="text-sm text-[#b3b3b3] font-semibold">Playlist</p>

          <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-white">
            {albumData.name}
          </h1>

          <p className="text-[#b3b3b3] text-sm sm:text-base">{albumData.desc}</p>

          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-xs sm:text-sm text-[#b3b3b3]">
            <img src={assets.spotify_logo} className="w-5" />
            <span className="text-white font-semibold">Spotify</span>
            • 1,323,154 likes • 
            <span className="text-white font-semibold">50 songs</span>, 2 hr 30 min
          </div>
        </div>
      </div>

      {/* ================= Table Header ================= */}
      <div className="
        grid 
        grid-cols-[30px_1fr_60px] 
        sm:grid-cols-[40px_2fr_1fr_80px] 
        md:grid-cols-[40px_3fr_2fr_2fr_1fr]
        mt-10 px-3 text-xs sm:text-sm text-[#a7a7a7]
      ">
        <p>#</p>
        <p>Title</p>

        {/* Tablet+ */}
        <p className="hidden sm:block">Album</p>

        {/* Desktop+ */}
        <p className="hidden md:block">Date Added</p>

        <img className="w-4 ml-auto" src={assets.clock_icon} />
      </div>

      <hr className="my-3 border-[#2a2a2a]" />

      {/* ================= Songs ================= */}
      <div className="flex flex-col">
        {songsData.map((item, index) => (
          <div
            key={index}
            className="
              grid 
              grid-cols-[30px_1fr_60px] 
              sm:grid-cols-[40px_2fr_1fr_80px] 
              md:grid-cols-[40px_3fr_2fr_2fr_1fr]
              items-center 
              px-3 py-2 
              rounded-md 
              hover:bg-[#2a2a2a] 
              group 
              cursor-pointer
            "
          >
            {/* Index */}
            <p className="text-[#a7a7a7] group-hover:text-white text-xs sm:text-sm">
              {index + 1}
            </p>

            {/* Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={item.image}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded"
              />
              <div>
                <p className="text-white text-xs sm:text-sm">{item.name}</p>
                <p className="text-[10px] sm:text-xs text-[#a7a7a7]">Artist name</p>
              </div>
            </div>

            {/* Album (Tablet+) */}
            <p className="hidden sm:block text-xs sm:text-sm text-[#a7a7a7]">
              {albumData.name}
            </p>

            {/* Date (Desktop+) */}
            <p className="hidden md:block text-sm text-[#a7a7a7]">
              5 days ago
            </p>

            {/* Duration */}
            <p className="text-xs sm:text-sm text-[#a7a7a7] ml-auto">
              {item.duration}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default DisplayAlbum
