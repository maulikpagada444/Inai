import React, { useState } from "react";
import { MdLock } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NewPassword({ email, setStep }) {
    const BASE_URL = import.meta.env.VITE_SOCKET_IO; // 🔹 use .env variable
    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setshowConfPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError("");

        if (!password || !confirmPassword) {
            setError("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(
                `${BASE_URL}/auth/login/forgot-password/reset/`, // 🔹 using BASE_URL
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        new_password: password,
                        confirm_password: confirmPassword,
                    }),
                }
            );

            const data = await res.json();

            if (data.status) {
                alert("password change successfully")
                navigate('/Sign-In')
                setStep(1)
                // Redirect or update step here
            } else {
                setError(data.error || "Something went wrong.");
            }
        } catch (err) {
            console.error(err);
            setError("Network error, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white z-10 relative flex justify-center items-center h-screen">
            <form
                    className="bg-[#7575751f] backdrop-blur-md lg:w-4/12 md:w-6/12 w-10/12 flex flex-col sm:gap-5 gap-3 lg:p-10 md:p-7 p-5 rounded-3xl"
                onSubmit={handleChangePassword}
            >
                <h2 className="sm:text-2xl text-xl">Set a new password</h2>
                <p className="text-[#747474] sm:text-[18px] text-[15px]">
                    Create a new password. Ensure it differs from previous ones for
                    security
                </p>

                {/* Password */}
                <div className="relative w-full">
                    <MdLock className="absolute sm:left-4 left-3 top-1/2 -translate-y-1/2 text-gray-500 sm:text-xl text-[15px]" />
                    <input
                        className="border border-[#212121] sm:p-4 p-3 w-full sm:pl-12 sm:text-[15px] text-[12px] pl-8 rounded-full"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        placeholder="Confirm Your Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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

                {/* Error message */}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                {/* Submit button */}
                <input
                    className={`${loading ? "bg-gray-500" : "bg-white"
                        } cursor-pointer text-black font-bold rounded-full sm:p-4 p-3 text-sm sm:text-md w-full`}
                    type="submit"
                    value={loading ? "Changing..." : "Change Password"}
                    disabled={loading}
                />
            </form>
        </div>
    );
}

export default NewPassword;
