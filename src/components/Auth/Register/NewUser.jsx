import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import Google from "../../../assets/Google-login.png";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";



function NewUser({ formData, setFormData, setStep, setResOtp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setshowConfPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const BASE_URL = import.meta.env.VITE_SOCKET_IO; // read from .env
  const navigate = useNavigate();
  const [googleLoading, setGoogleLoading] = useState(false);




  const handleChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      const bodyData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        login_method: "manual",
        is_glb: "true",
        device_id: "",
        device_name: ""
      };
      const response = await axios.post(
        `${BASE_URL}/auth/signup/register/`, // use BASE_URL here
        bodyData
      );
      setResOtp(response.data.otp);
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google Login Success
  const handleGoogleSuccess = async (tokenResponse) => {
    setGoogleLoading(true);
    try {
      const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });

      const userInfo = res.data;

      const bodyData = {
        email: userInfo.email,
        login_method: "google",
        social_id: res.data.sub,
        username: userInfo.name,
        is_glb: "true",
        device_id: "",
        device_name: ""
      };

      const backendRes = await axios.post(
        `${BASE_URL}/auth/signup/register/`,
        bodyData,
        { headers: { "Content-Type": "application/json" } }
      );


      if (backendRes.data.access_token) {
        Cookies.set("user_id", backendRes.data.user_id);
        Cookies.set("email", backendRes.data.email);
        Cookies.set("username", backendRes.data.username);
        Cookies.set("access_token", backendRes.data.access_token);
        Cookies.set("refresh_token", backendRes.data.refresh_token);
      }

      navigate("/", { replace: true });
    } catch (err) {
      console.error("❌ Google Register Failed:", err.response?.data || err);
      setError("Google register failed");
    } finally {
      setGoogleLoading(false);
    }
  };




  const RegisterUser = useGoogleLogin({
    onSuccess: (res) => {
      handleGoogleSuccess(res);
    },
    onError: () => {
      setError("Google login failed");
    },
    ux_mode: "redirect",
    redirect_uri: window.location.origin,
  });

  return (
    <div className="text-white z-10 relative flex justify-center items-center h-screen">
      <form
        className="bg-[#7575751f] backdrop-blur-sm lg:w-4/12 md:w-6/12 w-10/12 flex flex-col sm:gap-5 gap-3 lg:p-10 md:p-7 p-5 rounded-3xl"
      >

        {/* Username */}
        <div className="relative w-full">
          <FaRegUser className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
          <input
            className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChangeInput}
            placeholder="UserName"
          />
        </div>
        {/* Email */}
        <div className="relative w-full">
          <MdEmail className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
          <input
            className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
            placeholder="Your e-mail"
          />
        </div>
        {/* Password */}
        <div className="relative w-full">
          <MdLock className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
          <input
            className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChangeInput}
            placeholder="Enter Your Password"
          />
          {showPassword ? (
            <AiFillEyeInvisible
              className="absolute sm:right-4 right-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px] cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <AiFillEye
              className="absolute sm:right-4 right-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px] cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        {/* Confirm Password */}
        <div className="relative w-full">
          <MdLock className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
          <input
            className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
            type={showConfPassword ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChangeInput}
            placeholder="Confirm Your Password"
          />
          {showConfPassword ? (
            <AiFillEyeInvisible
              className="absolute sm:right-4 right-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px] cursor-pointer"
              onClick={() => setshowConfPassword(false)}
            />
          ) : (
            <AiFillEye
              className="absolute sm:right-4 right-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px] cursor-pointer"
              onClick={() => setshowConfPassword(true)}
            />
          )}
        </div>

        {error && <p className="text-red-500 sm:text-sm text-[10px] text-center">{error}</p>}

        <input
          className={`${loading ? "bg-[#666666]" : "bg-white"} cursor-pointer text-black font-bold rounded-full sm:p-4 p-3 text-sm sm:text-md w-full`}
          type="button"
          onClick={handleSignUp}
          value={loading ? "Signing Up..." : "Sign Up"}
          disabled={loading}
        />

        <p className="text-center text-[#8a8a8a]">- or -</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!googleLoading) RegisterUser();
          }}
          disabled={googleLoading}
          className={`${googleLoading ? "bg-gray-400 cursor-not-allowed" : "bg-white hover:bg-gray-200"
            } cursor-pointer w-3/4 sm:p-3 p-2 flex items-center self-center justify-evenly rounded-full transition-colors duration-200`}
        >
          {googleLoading ? (
            <h3 className="text-black font-semibold text-[10px] sm:text-[13px]">
              Loading...
            </h3>
          ) : (
            <>
              <img className="sm:h-8 h-6" src={Google} alt="" />
              <h3 className="text-black font-semibold text-[10px] sm:text-[13px]">
                Continue With Google
              </h3>
            </>
          )}
        </button>


        <span className="sm:text-sm text-[12px] text-[#8a8a8a] text-center my-2">
          Already have an account?{" "}
          <Link to="/Sign-In" className="text-white font-semibold hover:underline">
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}

export default NewUser;
