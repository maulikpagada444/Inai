import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // ✅ to get current URL
import { IoIosMore } from "react-icons/io";
import { useAppContext } from '../../Context';

function Aside({ setShowPopup, setOpen, open }) {

  const { setResponses, setInfoModeResponses } = useAppContext();


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Mode");
  const [UserId, setUserId] = useState("")
  const [History, setHistory] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = import.meta.env.VITE_SOCKET_IO;



  const { ReadOnly, setReadOnly } = useAppContext();



  const navigate = useNavigate()
  const [editingItemId, setEditingItemId] = useState(null);
  const [editTitle, setEditTitle] = useState("");


  const [openMenuId, setOpenMenuId] = useState(null);
  const [position, setPosition] = useState("bottom"); // popup position
  const containerRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };


  
  useEffect(() => {
    setOpenMenuId(null);
  }, [open])


  const displayedHistory = searchTerm
    ? History.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : History; // if searchTerm is empty, show all




  const options = ["Information Mode", "Friend Mode", "Love Mode", "Elder Mode"];

  useEffect(() => {
    const user_id = Cookies.get("user_id");
    setUserId(user_id)

  }, []);

  const handleOptionSelect = async (option) => {
    setSelectedOption(option);
    setOpenMenuId(null);
    setIsDropdownOpen(false);

    if (!UserId) {
      console.warn("UserId not found");
      return;
    }

    // ✅ Map dropdown option to mode
    const modeMap = {
      "Information Mode": "info",
      "Friend Mode": "friend",
      "Love Mode": "love",
      "Elder Mode": "elder",
    };

    const mode = modeMap[option]; // ✅ use option directly

    try {
      const res = await fetch(
        `${BASE_URL}/history/conversations/user/${UserId}/${mode}`, // ✅ now using mapped mode
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );



      if (!res.ok) throw new Error("Failed to fetch conversations");

      const data = await res.json();
      setHistory(data.conversations);
    } catch (err) {
      console.error("❌ Error fetching conversations:", err);
    }
  };


  const filteredHistory = searchTerm
    ? History.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : History;


  return (
    <>
      <aside
        className={`fixed top-0 right-0 h-full w-10/12 sm:w-3/10 bg-[#444444] text-white shadow-xl transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex justify-between h-full flex-col p-4">
          <div>

            <div className="relative w-full">
              <FaSearch className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
              <input
                className="bg-white text-black sm:p-3 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-xl"
                type="text"
                name="Search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

              />
            </div>
            <div className="my-3">
              <div
                className="w-full p-2 flex items-center justify-between mt-1 mb-1 border border-gray-300 text-[#93B1A6] rounded-lg bg-[#03030380] cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{selectedOption}</span>

                {/* arrow icon */}
                <span className="ml-2">
                  {isDropdownOpen ? (
                    <FaChevronUp className="text-[#93B1A6]" />
                  ) : (
                    <FaChevronDown className="text-[#93B1A6]" />
                  )}
                </span>
              </div>

              {isDropdownOpen && (
                <ul className="w-full bg-[#03030380] border overflow-hidden border-gray-300 rounded-lg shadow-lg">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      className={`px-4 ${selectedOption === option ? `bg-[#2e2e2e]` : `bg-[#03030380]`
                        } py-2 text-[#93B1A6] hover:bg-[#292929] cursor-pointer`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>


          {filteredHistory.length !== 0 ? (
            <main className="history p-2 h-full overflow-y-auto divide-y divide-[#6e6e6e]">
              {filteredHistory.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === filteredHistory.length - 1;

                let positionClass = "top-1/2 -translate-y-1/2";
                if (isFirst) positionClass = "top-0";
                if (isLast) positionClass = "bottom-0";

                return (
                  <div
                    key={item.id}
                    className="py-2 flex items-center justify-between cursor-pointer group hover:text-gray-300 transition relative"
                  >
                    {/* Title */}
                    {editingItemId === item.id ? (
                      <input
                        type="text"
                        className="flex-1 text-[14px] sm:text-[16px] font-medium truncate bg-[#2e2e2e] text-white rounded px-2 p-1"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        onBlur={() => setEditingItemId(null)}
                        onKeyDown={async (e) => {
                          if (e.key === "Enter") {
                            try {
                              const res = await fetch("https://api.inaiverse.com/history/conversation/title", {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                  accept: "application/json",
                                },
                                body: JSON.stringify({
                                  user_id: UserId,
                                  conversation_id: item.id,
                                  new_title: editTitle,
                                }),
                              });

                              if (!res.ok) throw new Error("Failed to update title");

                              setHistory((prev) =>
                                prev.map((h) =>
                                  h.id === item.id ? { ...h, title: editTitle } : h
                                )
                              );

                              setEditingItemId(null);
                              setOpenMenuId(null);
                            } catch (err) {
                              console.error(err);
                              alert("Error updating title");
                            }
                          }
                        }}
                      />
                    ) : (
                      <h3
                        className="flex-1 text-[14px] p-1 sm:text-[16px] font-medium truncate cursor-pointer"
                        // onClick={() => {
                        //   // your fetch logic here
                        // }}



                        onClick={async () => {

                          try {
                            const res = await fetch(
                              `https://api.inaiverse.com/history/conversation/${item.id}?user_id=${UserId}`,
                              {
                                method: "GET",
                                headers: {
                                  accept: "application/json",
                                },
                              }
                            );


                            if (!res.ok) throw new Error("Failed to fetch conversation");


                            const data = await res.json();



                            if (selectedOption === "Information Mode") {
                              setInfoModeResponses(data.messages);

                              // API call via Vite proxy
                              fetch('https://api.inaiverse.com/history/set-active', {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                  user_id: UserId,         // your user ID
                                  conversation_id: item.id  // the conversation ID
                                })
                              })
                                .then(res => res.json())
                                .then(response => {
                                  navigate('/info'); // navigate after successful API call
                                })
                                .catch(err => {
                                  console.error('API error:', err);
                                  navigate('/info'); // still navigate even if API fails
                                });

                              setOpen(false);
                            }
                            else {
                              navigate('/Read-Only')
                              setReadOnly(data.messages)
                            }



                            // You can now use `data`, e.g., open a chat window or display messages
                          } catch (err) {
                            console.error(err);
                            alert("Error fetching conversation");
                          }
                        }}


                      >
                        {item.title}
                      </h3>
                    )}

                    {/* More Button */}
                    <button
                      onClick={() => toggleMenu(item.id)}
                      className="hidden cursor-pointer group-hover:flex text-[24px] p-1 rounded-full bg-[#212121] shrink-0 ml-2 hover:bg-[#333]"
                    >
                      <IoIosMore />
                    </button>

                    {/* Popup Menu */}
                    {openMenuId === item.id && (
                      <div
                        className={`absolute right-8 ${positionClass} bg-[#1e1e1e] text-white rounded-lg shadow-lg w-32 py-2 z-10`}
                      >
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-[#333]"
                          onClick={() => {
                            setEditingItemId(item.id);
                            setEditTitle(item.title);
                            setOpenMenuId(null);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-[#333] text-red-400"
                          onClick={async () => {
                            try {
                              const response = await fetch(
                                `https://api.inaiverse.com/history/conversation/${item.id}?user_id=${UserId}`,
                                {
                                  method: "DELETE",
                                }
                              );
                              if (!response.ok) throw new Error("Failed to delete");

                              setHistory((prev) =>
                                prev.filter((h) => h.id !== item.id)
                              );
                            } catch (err) {
                              console.error(err);
                              alert("Error deleting conversation");
                            }
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </main>
          ) : (
            <p className="text-gray-400 text-center">No history found</p>
          )}


          <button
            className="bg[#f3f3f336] py-3 font-bold cursor-pointer px-4 bg-white text-black rounded-lg hover:bg-[#dadada]"
            onClick={() => {
              setShowPopup(true)
              setOpenMenuId(null);
              setOpen(false)
            }}

          >
            Settings
          </button>
        </div>
      </aside>
    </>
  )
}

export default Aside