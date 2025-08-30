import React, { useEffect, useRef, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router";
import { socket } from '../../socket';
import { useAppContext } from '../../Context';


function Popup({ showPopup, setShowPopup }) {
  const BASE_URL = import.meta.env.VITE_SOCKET_IO;
  const { ReadOnly, setReadOnly, InfoModeResponses, setInfoModeResponses, GlbModeResponses, setGlbModeResponses } = useAppContext();
  const navigate = useNavigate();



  const options = ["account", "resetPassword", "changeEmail", "changeUsername", "logout", "guidelines"];
  const [open, setOpen] = useState(false); // for small screens


  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const [confirmText, setConfirmText] = useState("");

  const [selected, setSelected] = useState("account"); // default = account

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // 🔹 Password fields
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [NewEmail, setNewEmail] = useState("");



  useEffect(() => {
    const cookietoken = Cookies.get("access_token");
    const cookieEmail = Cookies.get("email");
    const cookieUsername = Cookies.get("username");


    if (cookieUsername) setUsername(cookieUsername);
    if (cookieEmail) setEmail(cookieEmail);
    if (cookieEmail) setNewEmail(cookieEmail);
    if (cookietoken) setToken(cookietoken);
  }, []);


  // Handle typing
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {  // only numbers allowed
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next box if value entered
      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // 🔹 Handle Reset Password API
  const handleResetPassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setErrorMessage("⚠️ Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("⚠️ New password & Confirm password do not match!");
      return;
    }

    try {
      const res = await fetch(
        `${BASE_URL}/auth/change-password/request-change-password/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage(data.message || "✅ Password changed successfully!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setErrorMessage(data.message || "❌ Failed to change password!");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("❌ Something went wrong!");
    }
  };

  return (

    <>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-40">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowPopup(false)}
          ></div>

          {/* Popup card with aside + content */}
          <div
            className="relative lg:w-7/12 md:w-9/12 w-10/12 h-10/12 bg-[#424242] text-[#cccccc] shadow-lg flex flex-col sm:flex-row animate-slideDown z-50 rounded-xl overflow-hidden"

          >
            {/* Small screen: dropdown */}
            <div className="sm:hidden  p-3">
              <button
                onClick={() => setOpen(!open)}
                className="w-full bg-[#212121] text-white p-3 flex items-center  justify-between rounded-lg"
              >
                {selected.charAt(0).toUpperCase() + selected.slice(1)}    {open ? <AiOutlineUp size={15} /> : <AiOutlineDown size={15} />}

              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-96 mt-2" : "max-h-0"}`}
              >
                <div className="bg-[#212121] rounded-lg p-3 flex flex-col gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        setSuccessMessage("")
                        setErrorMessage("")
                        setSelected(opt);
                        setOpen(false); // close dropdown after select
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg cursor-pointer transition
                  ${selected === opt
                          ? "bg-[#b9b9b9] font-semibold text-[#000000]"
                          : "hover:bg-[#333] text-gray-300"
                        }`}
                    >
                      {opt === "account" && "Account"}
                      {opt === "resetPassword" && "Reset Password"}
                      {opt === "changeEmail" && "Change Email"}
                      {opt === "changeUsername" && "Change Username"}
                      {opt === "logout" && "Logout"}
                      {opt === "guidelines" && "Guidelines"}


                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Large screen: sidebar */}
            <aside className="hidden sm:flex sm:flex-col sm:w-3/6 bg-[#212121] sm:p-6 gap-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSuccessMessage("")
                    setErrorMessage("")
                    setSelected(opt)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg cursor-pointer transition
                                       ${selected === opt
                      ? "bg-[#444] font-semibold text-white"
                      : "hover:bg-[#333] text-gray-300"
                    }`}
                >
                  {opt === "account" && "Account"}
                  {opt === "resetPassword" && "Reset Password"}
                  {opt === "changeEmail" && "Change Email"}
                  {opt === "changeUsername" && "Change Username"}
                  {opt === "logout" && "Logout"}
                  {opt === "guidelines" && "Guidelines"}
                </button>
              ))}
            </aside>
            {/* Main Content (4/6) */}
            <div className="p-6 flex flex-col w-full gap-2">
              {selected === "account" && (
                <>
                  <h2 className="text-xl font-bold">Account Info</h2>
                  <div className="border-b border-white my-2"></div>

                  <div className="flex items-center justify-between w-full">
                    <label className="">Username:</label>
                    <p className="  rounded-lg font-semibold px-3 py-2  text-white">
                      {username || "Not set"}
                    </p>
                  </div>
                  <div className="border-b border-[#c9c9c9a9] my-2"></div>


                  <div className=" flex items-center justify-between w-full">
                    <label className="">Email:</label>
                    <p className="rounded-lg px-3 font-semibold py-2  text-white">
                      {email || "Not set"}
                    </p>
                  </div>
                </>
              )}

              {selected === "resetPassword" && (
                <>
                  <h2 className="text-xl font-bold mb-4">Reset Password</h2>

                  {/* Error / Success Messages */}
                  {errorMessage && (
                    <p className="text-red-500 font-medium mb-2">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-400 font-medium mb-2">{successMessage}</p>
                  )}

                  {/* Old Password */}
                  <div className="relative mb-3">
                    <input
                      type={showOld ? "text" : "password"}
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-full border text-white border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter old password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300"
                      onClick={() => setShowOld(!showOld)}
                    >
                      {showOld ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </button>
                  </div>

                  {/* New Password */}
                  <div className="relative mb-3">
                    <input
                      type={showNew ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full border text-white border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300"
                      onClick={() => setShowNew(!showNew)}
                    >
                      {showNew ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative mb-3">
                    <input
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full border text-white border-gray-300 rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-300"
                      onClick={() => setShowConfirm(!showConfirm)}
                    >
                      {showConfirm ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleResetPassword}
                    className="mt-2 w-full bg-white text-black py-2 rounded-lg cursor-pointer hover:bg-[#d3d3d3]"
                  >
                    Reset Password
                  </button>
                </>
              )}

              {selected === "changeEmail" && (
                <>
                  <h2 className="text-xl font-bold mb-4">Change Email</h2>

                  {/* Error / Success Messages */}
                  {errorMessage && (
                    <p className="text-red-500 font-medium mb-2">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-400 font-medium mb-2">{successMessage}</p>
                  )}

                  {/* If OTP step not yet started → show email input */}
                  {!showOtp && (
                    <>
                      {/* New Email Input */}
                      <input
                        type="email"
                        value={NewEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className="w-full border text-white border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new email"
                      />

                      {/* Submit Button */}
                      <button
                        onClick={async () => {
                          setErrorMessage("");
                          setSuccessMessage("");
                          setIsLoading(true);

                          if (!NewEmail) {
                            setErrorMessage("⚠️ Please enter a new email");
                            setIsLoading(false);
                            return;
                          }
                          console.log(`${BASE_URL}/auth/email-change/request-change-email`);
                          

                          try {
                            const res = await fetch(`${BASE_URL}/auth/email-change/request-change-email`, {
                              method: "POST",
                              headers: {
                                Authorization: `Bearer ${Token}`,
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ new_email: NewEmail }),
                            });


                            const data = await res.json();

                            if (res.ok) {
                              setSuccessMessage(data.message || "✅ OTP sent to your email!");
                              setShowOtp(true); // 🔹 Now show OTP fields
                            } else {
                              setErrorMessage(data.error || data.message || "❌ Failed to update email!");
                            }
                          } catch (err) {
                            console.error("Error:", err);
                            setErrorMessage("❌ Something went wrong!");
                          } finally {
                            setIsLoading(false);
                          }
                        }}
                        disabled={isLoading}
                        className={`mt-2 w-full py-2 rounded-lg cursor-pointer 
                ${isLoading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-white text-black hover:bg-[#d3d3d3]"}
              `}
                      >
                        {isLoading ? "Updating..." : "Update Email"}
                      </button>
                    </>
                  )}

                  {/* OTP Input */}
                  {showOtp && (
                    <>
                      <p className="text-sm text-gray-300 mb-3">Enter the 6-digit OTP sent to your email</p>
                      <div className="flex gap-3 justify-center mb-4">
                        {otp.map((digit, index) => (
                          <input
                            key={index}
                            type="text"
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputsRef.current[index] = el)}
                            className="w-12 h-12 border-2 border-gray-400 rounded-lg text-center text-lg font-bold focus:border-blue-500 outline-none"
                          />
                        ))}
                      </div>

                      {/* Verify OTP Button */}
                      <button
                        onClick={async () => {
                          const otpCode = otp.join("");
                          if (otpCode.length !== 6) {
                            setErrorMessage("⚠️ Enter a valid 6-digit OTP");
                            return;
                          }

                          try {
                            const res = await fetch(
                              `${BASE_URL}/auth/email-change/verify-change-email/`,
                              {
                                method: "POST",
                                headers: {
                                  Authorization: `Bearer ${Token}`,
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ otp: otpCode }),
                              }
                            );

                            const data = await res.json();
                            Cookies.set("email", NewEmail);

                            if (res.ok) {
                              setSuccessMessage(data.message || "✅ Email changed successfully!");
                              setErrorMessage("");
                              setShowOtp(false);
                            } else {
                              setErrorMessage(data.error || data.message || "❌ Invalid OTP!");
                            }
                          } catch (err) {
                            console.error(err);
                            setErrorMessage("❌ Something went wrong verifying OTP");
                          }
                        }}
                        className="mt-2 w-full bg-white text-black py-2 rounded-lg cursor-pointer hover:bg-[#d3d3d3]"
                      >
                        Verify OTP
                      </button>
                    </>
                  )}
                </>
              )}

              {selected === "changeUsername" && (
                <>
                  <h2 className="text-xl font-bold mb-4">Change User Name</h2>

                  {/* Error / Success Messages */}
                  {errorMessage && (
                    <p className="text-red-500 font-medium mb-2">{errorMessage}</p>
                  )}
                  {successMessage && (
                    <p className="text-green-400 font-medium mb-2">{successMessage}</p>
                  )}

                  {/* New Username Input */}
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border text-white border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new username"
                  />

                  <button
                    onClick={async () => {
                      setErrorMessage("");
                      setSuccessMessage("");
                      setIsLoading(true);

                      if (!username) {
                        setErrorMessage("⚠️ Please enter a new username");
                        setIsLoading(false);
                        return;
                      }

                      try {
                        const formData = new FormData();
                        formData.append("new_username", username);

                        const res = await fetch(`${BASE_URL}/auth/profile/update/`, {
                          method: "PATCH",
                          headers: {
                            Authorization: `Bearer ${Token}`,
                          },
                          body: formData,
                        });

                        const data = await res.json();

                        if (res.ok) {
                          Cookies.set("username", username);
                          setSuccessMessage(data.message || "✅ Username updated successfully!");
                        } else {
                          setErrorMessage(data.error || data.message || "❌ Failed to update username!");
                        }
                      } catch (err) {
                        console.error("Error updating username:", err);
                        setErrorMessage("❌ Something went wrong!");
                      } finally {
                        setIsLoading(false);
                      }
                    }}
                    disabled={isLoading}
                    className={`mt-2 w-full py-2 rounded-lg cursor-pointer 
        ${isLoading ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-white text-black hover:bg-[#d3d3d3]"}`}
                  >
                    {isLoading ? "Updating..." : "Update User Name"}
                  </button>
                </>
              )}



              {selected === "logout" && (
                <>
                  <h2 className="text-xl font-bold">Log out</h2>
                  <div className="flex flex-col gap-2 mt-4">
                    <h3 className='font-semibold'>Type "logout my account"</h3>
                    <input
                      type="text"
                      placeholder='logout my account'
                      value={confirmText}
                      onChange={(e) => setConfirmText(e.target.value)}
                      className="border px-3 py-2 rounded-lg"
                    />

                    <button
                      onClick={async () => {
                        if (socket.connected) socket.disconnect();

                        try {
                          const res = await fetch("https://api.inaiverse.com/auth/logout/", {
                            method: "POST",
                            headers: {
                              Authorization: `Bearer ${Token}`,
                              "Content-Type": "application/json",
                            },
                            body: "", // if your API expects empty body
                          });

                          if (res.ok) {
                            Cookies.remove("access_token");
                            Cookies.remove("email");
                            Cookies.remove("username");
                            Cookies.remove("refresh_token");
                            Cookies.remove("user_id");
                            setUsername("");
                            setEmail("");
                            setNewEmail("");
                            setToken("");
                            navigate("/Sign-In");
                          } else {
                            // const data = await res.json();
                            // console.log(data);
                          }
                        } catch (err) {
                          console.error("Logout error:", err);
                        }
                      }}
                      disabled={confirmText !== "logout my account"}
                      className={`px-4 py-2 rounded-lg cursor-pointer
              ${confirmText === "logout my account"
                          ? "bg-red-500 hover:bg-red-600 text-white"
                          : "bg-gray-400 text-gray-200 cursor-not-allowed"
                        }`}
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}

              {selected === "guidelines" && (
                <>
                  <div className='flex flex-col'>

                    <h2
                      className="text-xl font-bold">Guidelines</h2>
                    <div className="flex w-full flex-col sm:flex-row justify-between gap-2 my-4">
                      <div className='w-full flex flex-col gap-3'>
                        <Link
                          className="px-4 bg-[#212121] hover:bg-[#2e2e2e] w-full  py-2 flex rounded-lg cursor-pointer"
                          to="/about-app"
                          target="_blank"
                        >About App</Link>
                        <Link
                          className="px-4 bg-[#212121] hover:bg-[#2e2e2e] w-full  py-2 flex rounded-lg cursor-pointer"
                          to="/terms-conditions"
                          target="_blank"
                        >Terms & Condition</Link>
                      </div>
                      <div className='w-full flex flex-col gap-3'>
                        <Link
                          className="px-4 bg-[#212121] hover:bg-[#2e2e2e] w-full  py-2 flex rounded-lg cursor-pointer"
                          to="/help-center"
                          target="_blank"
                        >Help & Center</Link>
                        <Link
                          className="px-4 bg-[#212121] hover:bg-[#2e2e2e] w-full  py-2 flex rounded-lg cursor-pointer"
                          to="/privacy-policy"
                          target="_blank"
                        >Privacy Policy</Link>
                      </div>


                    </div>
                  </div>
                </>
              )}


            </div>
          </div>

        </div>
      )}
    </>

  )
}

export default Popup