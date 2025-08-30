import React, { useRef, useState } from "react";
import axios from "axios";

function OtpVerification({ formData, resOtp, setStep, setAccessTok, setRefreshTok }) {
  const BASE_URL = import.meta.env.VITE_SOCKET_IO; // 🔹 use .env URL

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const [otpError, setOtpError] = useState("");
  const [loadingOtp, setLoadingOtp] = useState(false);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const verifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp !== resOtp) {
      setOtpError("OTP does not match. Please try again.");
      return;
    }
    setLoadingOtp(true);
    setOtpError("");
    try {
      const bodyData = { email: formData.email, otp: enteredOtp };

      const response = await axios.post(
        `${BASE_URL}/auth/signup/confirm/`, // 🔹 use BASE_URL
        bodyData,
        { headers: { Accept: "application/json" } }
      );

      setAccessTok(response.data.access_token)
      setRefreshTok(response.data.refresh_token)
      setStep(3);
    } catch (err) {
      setOtpError(
        err.response?.data?.error || "Failed to verify OTP"
      );
    } finally {
      setLoadingOtp(false);
    }
  };

  return (
    <div className="text-white z-10 relative flex justify-center items-center h-screen">
      <form
        className="bg-[#7575751f] backdrop-blur-md lg:w-4/12 md:w-6/12 w-10/12 flex flex-col sm:gap-5 gap-3 lg:p-10 md:p-7 p-5 rounded-3xl"
      >
        <h2 className="sm:text-2xl text-xl">Verify your Email</h2>
        <p className="text-[#747474] sm:text-[18px] text-[15px]">
          We sent a reset link to {formData.email}. Enter the 6-digit code mentioned in the email.
        </p>

        <div className="flex sm:gap-3 gap-1 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputsRef.current[index] = el)}
              className="lg:w-12 lg:h-12 md:h-10 md:w-10 h-9 w-9 border-2 border-gray-400 rounded-lg text-center lg:text-lg md:text-[15px] text-[11px] sm:font-bold focus:border-blue-500 outline-none"
            />
          ))}
        </div>

        {otpError && <p className="text-red-500 sm:text-sm text-[10px] text-center">{otpError}</p>}

        <input
          className={`${loadingOtp ? "bg-[#666666]" : "bg-white"} cursor-pointer text-black font-bold rounded-full sm:p-4 p-2 m-5 w-full self-center`}
          type="button"
          value={loadingOtp ? "Verifying..." : "Verify"}
          onClick={verifyOtp}
          disabled={loadingOtp}
        />
      </form>
    </div>
  );
}

export default OtpVerification;
