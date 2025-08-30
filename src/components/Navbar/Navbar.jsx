import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosMenu } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import menuIcon from '../../assets/menu.png';
import newChatIcon from '../../assets/new_chat.png';
import Aside from './Aside';
import Popup from './Popup';


function Navbar({ onNewChat }) {

  const { pathname } = useLocation();


  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation(); // ✅ get current path
  const isReadOnly = location.pathname === "/Read-Only"; // ✅ check path




  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full z-20 sm:p-6 p-4 flex justify-between items-center bg-transparent">
        <div className='flex items-center gap-3'>

          {/* Back Button */}
          <button
            className="text-white bg-transparent cursor-pointer rounded-full p-2 hover:bg-[#212121]"
            onClick={() => navigate("/")}
          >
            <IoIosArrowBack size={24} />
          </button>
          <div className='text-white text-xl font-semibold'>
            {pathname === "/Info" && "Information Mode"}
            {pathname === "/info" && "Information Mode"}
            {pathname === "/Friend" && "Friend Mode"}
            {pathname === "/friend" && "Friend Mode"}
            {pathname === "/Elder" && "Elder Mode"}
            {pathname === "/elder" && "Elder Mode"}
            {pathname === "/Love" && "Love Mode"}
            {pathname === "/love" && "Love Mode"}
          </div>
        </div>

        {/* Menu Button */}
        <div className='flex flex-row'>
          {!isReadOnly && (
            <div className="relative group">
              <button
                className="text-white bg-transparent flex justify-center items-center cursor-pointer rounded-full p-2 hover:bg-[#212121] transition-all duration-300"
                onClick={onNewChat}
              >
                <img src={newChatIcon} alt="New Chat" className="w-6 h-6 object-contain" />
              </button>
              {/* Tooltip */}
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                New Chat
              </span>
            </div>

          )}
          <button
            className="text-white bg-transparent flex justify-center items-center cursor-pointer rounded-full p-2 hover:bg-[#212121]"
            onClick={() => setOpen(!open)} // :point_left: toggle sidebar
          >
            <img src={menuIcon} alt="Menu" className="w-6 h-6 object-contain" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Aside setShowPopup={setShowPopup} setOpen={setOpen} open={open} />


      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />


      {/* Animation */}
      <style>
        {`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>



      {/* Background overlay when sidebar open */}
      {open && (
        <div
          className="fixed inset-0 bg-[#0000009a] bg-opacity-40 z-10"
          onClick={() => setOpen(false)} // close sidebar when clicking outside
        ></div>
      )}
    </>
  )
}

export default Navbar
