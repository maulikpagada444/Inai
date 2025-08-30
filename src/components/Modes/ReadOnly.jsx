import React from 'react'
import { useAppContext } from "../../Context";
import Navbar from '../Navbar/Navbar';



function ReadOnly() {
  const { ReadOnly, setReadOnly } = useAppContext();

  return (
    <>
      <div className="w-full h-screen relative bg-gradient-to-b font-inter from-[#181114] to-[#510813] overflow-hidden">
        <Navbar
        />
        {/* Chat box */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:w-3/5 w-full p-4">

          <div className="history my-2 p-3 text-white flex flex-col overflow-y-auto max-h-[80vh]">
            {ReadOnly.map((r, idx) => (
              <div
                key={idx}
                className={`my-1 rounded-xl p-3 max-w-8/12 break-all ${r.role === "user"
                  ? "bg-[#ffffffaf] rounded-xl p-2.5 text-black self-end"
                  : "bg-[#ffffff2f] rounded-xl p-2.5 font-semibold self-start"
                  }`}
              >
                {r.content}
              </div>
            ))}
            <div ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadOnly