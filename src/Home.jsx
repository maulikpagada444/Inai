import { useState, useEffect } from 'react'
import INAI from './assets/INAI.png'
import YouTube from './assets/YouTube.png'
import Instagram from './assets/Instagram.png'
import Facebook from './assets/Facebook.png'
import Linkedin from './assets/Linkedin.png'
// import { socket } from './socket';
import Cookies from "js-cookie";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Twitter from "./assets/Twitter.png";


import { useNavigate } from "react-router";


import Video from './components/Video'
function Home() {

  document.title = "INAI";


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [User_ID, setUser_ID] = useState("");

  useEffect(() => {
    const user_id = Cookies.get("user_id");
    const cookieEmail = Cookies.get("email");
    const cookieUsername = Cookies.get("username");

    if (cookieUsername) setUsername(cookieUsername);
    if (cookieEmail) setEmail(cookieEmail);
    if (user_id) setUser_ID(user_id);
  }, []);


  // useEffect(() => {
  //   socket.on("connect", () => {
  //   });

  //   return () => {
  //     socket.off("connect"); // remove listener but DON'T disconnect
  //   };
  // }, []);


  // useEffect(() => {
  //   // Listen for connection
  //   socket.on("connect", () => {
  //     // Optional: Register user immediately
  //     socket.emit("register_user", { user_id: User_ID });
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     socket.off("connect");
  //   };
  // }, []);





  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Mode");

  const options = ["Information Mode", "Friend Mode", "Love Mode", "Elder Mode"];

  let navigate = useNavigate();


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Video />
      <div className='flex gap-2 justify-evenly relative z-10 p-4 flex-col items-center h-screen'>
        <img className='flex justify-center sm:h-[200px] h-[100px]' src={INAI} alt="INAI Logo" />

        <div className='flex flex-col gap-3'>

          <div>
            <h2 className='text-white sm:text-xl text-sm'>Enter mode and Get started in <b> INAI VERSE </b></h2>
          </div>



          {/* Custom Dropdown for "Type of Inquiry" */}
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
              <ul className="w-full bg-[#03030380] border border-gray-300 rounded-lg shadow-lg">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`px-4 ${selectedOption === option ? `bg-[#2e2e2e]` : `bg-[#03030380]`
                      } py-2 rounded-lg text-[#93B1A6] hover:bg-[#292929] cursor-pointer`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>


          <button
            className='bg-white w-full py-2 rounded-lg font-bold cursor-pointer'
            onClick={() => {
              const routeMap = {
                "Information Mode": "Info",
                "Friend Mode": "Friend",
                "Love Mode": "Love",
                "Elder Mode": "Elder",
              };

              if (!User_ID) {
                navigate("/Sign-Up");
                return; // stop further execution
              }

              const route = routeMap[selectedOption];
              if (route) {
                navigate(`/${route}`);
              }
            }}
          >
            Get Started
          </button>

        </div>

        <div className="flex gap-3 w-8/12 md:w-4/12 sm:w-3/12 justify-evenly">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/inai-worlds-pvt-ltd/posts/?feedView=all"
            className=" bg-white p-1 w-15 cursor-pointer rounded-full"
          >
            <img src={Linkedin} alt="" srcSet="" />
          </a>
          <a
            target="_blank"
            href="https://x.com/Inai_Worlds"
            className=" bg-white p-1  w-15 cursor-pointer rounded-full"
          >
            <img src={Twitter} alt="" srcSet="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/inai_life/"
            className=" bg-white p-1  w-15 cursor-pointer rounded-full"
          >
            <img src={Instagram} alt="" srcSet="" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@INAIWorldsPvtLtd"
            className=" bg-white p-1 w-15 cursor-pointer rounded-full"
          >
            <img src={YouTube} alt="" srcSet="" />
          </a>
        </div>


      </div>
    </>)
}

export default Home