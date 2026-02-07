import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div
      className="
        hidden 
        md:flex 
        md:w-[30%] 
        lg:w-[25%] 
        h-screen 
        p-2 
        text-white
      "
    >
      <div className="bg-[#121212] w-full h-full rounded-lg flex flex-col">

        {/* ===== HOME & SEARCH ===== */}
        <div className="pt-2">
          <div className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-[#1f1f1f] rounded">
            <img src={assets.home_icon} className="w-5" />
            <p className="font-semibold hidden lg:block">Home</p>
          </div>

          <div className="flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-[#1f1f1f] rounded">
            <img src={assets.search_icon} className="w-5" />
            <p className="font-semibold hidden lg:block">Search</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] bg-[#2a2a2a] my-3 mx-4"></div>

        {/* ===== YOUR LIBRARY ===== */}
        <div className="flex items-center justify-between px-6 py-2 hover:bg-[#1f1f1f] cursor-pointer rounded">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-6" />
            <p className="font-semibold hidden lg:block">Your Library</p>
          </div>

          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-4 opacity-70 hover:opacity-100" />
            <img src={assets.plus_icon} className="w-4 opacity-70 hover:opacity-100" />
          </div>
        </div>

        {/* ===== CARD 1 ===== */}
        <div className="bg-[#1f1f1f] mx-4 mt-4 p-4 rounded-lg hidden lg:block">
          <p className="font-semibold text-sm">Create your first playlist</p>
          <p className="text-xs text-gray-400 mt-1">
            it's easy we'll help you
          </p>
          <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full mt-3">
            Create Playlist
          </button>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="bg-[#1f1f1f] mx-4 mt-4 p-4 rounded-lg hidden lg:block">
          <p className="font-semibold text-sm">Let’s find some podcasts to follow</p>
          <p className="text-xs text-gray-400 mt-1">
            we'll keep you updated on new episodes
          </p>
          <button className="bg-white text-black text-sm font-semibold px-4 py-1 rounded-full mt-3">
            Browse podcasts
          </button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
