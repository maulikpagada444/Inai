import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import Google from "../../../assets/Google-login.png";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function UserEntry({ setStep }) {
    const BASE_URL = import.meta.env.VITE_SOCKET_IO;
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Manual Login
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(`${BASE_URL}/auth/login/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                    login_method: "manual",
                    is_glb: "true",
                    device_id: "",
                    device_name: ""
                }),
            });

            const data = await res.json();
            if (data.status) {
                Cookies.set("user_id", data.user_id);
                Cookies.set("email", data.email);
                Cookies.set("username", data.username);
                Cookies.set("access_token", data.access_token);
                Cookies.set("refresh_token", data.refresh_token);

                navigate("/", { replace: true });
            } else {
                setError(data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);

            setError("Something went wrong, please try again.");
        }
    };



    // Google Login Success
    const handleGoogleSuccess = async (tokenResponse) => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
            });

            const userInfo = res.data; // email, name, picture, etc.

            const bodyData = {
                email: userInfo.email,
                password: "",
                login_method: "google",
                social_id: userInfo.sub,
                username: userInfo.name,

            };

            const backendRes = await axios.post(
                `${BASE_URL}/auth/login/login/`,
                bodyData,
                { headers: { "Content-Type": "application/json" } }
            );


            // Save cookies
            Cookies.set("user_id", backendRes.data.user_id);
            Cookies.set("email", backendRes.data.email);
            Cookies.set("username", backendRes.data.username);
            Cookies.set("access_token", backendRes.data.access_token);
            Cookies.set("refresh_token", backendRes.data.refresh_token);

            navigate("/", { replace: true });
        } catch (err) {
            console.error("❌ Google Login Failed:", err.response?.data || err);
            setError("Google login failed");
        }
    };

    const login = useGoogleLogin({
        onSuccess: handleGoogleSuccess,
        onError: () => setError("Google login failed"),
        ux_mode: "redirect", // redirect flow
        redirect_uri: window.location.origin,
    });




    return (
        <div className="text-white z-10 relative flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-[#7575751f] backdrop-blur-md lg:w-4/12 md:w-6/12 w-10/12 flex flex-col sm:gap-5 gap-3 lg:p-10 md:p-7 p-5 rounded-3xl"
            >
                {/* Email */}
                <div className="relative w-full">
                    <MdEmail className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
                    <input
                        className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
                        type="email"
                        placeholder="Your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="relative w-full">
                    <MdLock className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
                    <input
                        className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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

                {/* Forgot password */}
                <span
                    className="sm:text-sm text-[12px] cursor-pointer text-[#8a8a8a] text-end hover:underline px-3"
                    onClick={(e) => {
                        e.preventDefault();
                        setStep(2);
                    }}
                >
                    Forgot password
                </span>

                {/* Error */}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Submit */}
                <input
                    className="bg-white cursor-pointer text-black font-bold rounded-full sm:p-4 p-3 text-sm sm:text-md w-full"
                    type="submit"
                    value="Sign In"
                />

                <p className="text-center text-[#8a8a8a]">- or -</p>


                {/* Google Login Button */}
                <button
                    onClick={() => login()}
                    className="bg-white w-3/4 cursor-pointer sm:p-3 p-2 flex items-center self-center justify-evenly rounded-full shadow-md hover:bg-gray-100 transition"
                >
                    <img className="sm:h-8 h-6" src={Google} alt="Google logo" />
                    <h3 className="text-black font-semibold text-[10px] sm:text-[13px]">
                        Continue With Google
                    </h3>
                </button>



                {/* Signup link */}
                <span className="sm:text-sm text-[12px] text-[#8a8a8a] text-center my-2">
                    Don't have an account?{" "}
                    <Link
                        to="/Sign-Up"
                        className="text-sm font-semibold text-[#ffffff] text-center hover:underline"
                    >
                        Sign Up
                    </Link>
                </span>
            </form>
        </div>
    );
}

export default UserEntry;
