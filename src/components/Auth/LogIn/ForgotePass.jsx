import React, { useState } from "react";

function ForgotePass({ setStep, setEmail }) {
  const [InputEmail, setInputEmail] = useState("");
  const [error, setError] = useState(""); // For error messages
  const [loading, setLoading] = useState(false); // Loading state

  const handleGenerateOTP = async (e) => {
      const BASE_URL = import.meta.env.VITE_SOCKET_IO;

    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${BASE_URL}/auth/login/forgot-password/email/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: InputEmail,
          }),
        }
      );

      const data = await res.json();

      if (data.status) {
        // Save email in parent state & move to next step
        setEmail(InputEmail);
        setStep(3);
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-white z-10 relative flex justify-center items-center h-screen">
        <form
          onSubmit={handleGenerateOTP}
          className="bg-[#7575751f] backdrop-blur-md lg:w-4/12 md:w-6/12 w-10/12 flex flex-col sm:gap-5 gap-3 lg:p-10 md:p-7 p-5 rounded-3xl"
        >
          <h2 className="sm:text-2xl text-xl">Forgot password</h2>
          <p className="text-[#747474] sm:text-[18px] text-[15px]">
            Please enter your email to reset the password
          </p>

          <input
            className="border border-[#212121] sm:p-4 p-3 w-full sm:text-[15px] text-[12px] rounded-full"
            type="email"
            placeholder="Enter Your e-mail"
            value={InputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />

          {/* Show error if exists */}
          {error && (
            <p className="text-red-500 sm:text-sm text-[10px] text-center">{error}</p>
          )}

          <input
            className={`${loading ? "bg-gray-500" : "bg-white"} cursor-pointer text-black font-bold rounded-full sm:p-4 p-3 text-sm sm:text-md w-full`}
            type="submit"
            value={loading ? "Sending..." : "Generate OTP"}
            disabled={loading}
          />

        </form>
      </div>
    </div>
  );
}

export default ForgotePass;
