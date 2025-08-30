import React, { useState } from "react";
import Female from "../../../assets/Female.svg";
import Male from "../../../assets/Male.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function SelGender({ AccessTok, email, RefreshTok }) {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_SOCKET_IO; // 🔹 Use .env


  const handleContinue = async () => {
    if (!selected) {
      setError("Please select a gender before continuing.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/gender/choose/`, // 🔹 Use BASE_URL
        { gender: selected },
        {
          headers: {
            Authorization: `Bearer ${AccessTok}`,
            "Content-Type": "application/json",
          },
        }
      );


      // Store in cookies
      Cookies.set("username", response.data.username, { expires: 7 });
      Cookies.set("user_id", response.data.user_id, { expires: 7 });
      Cookies.set("email", email, { expires: 7 });
      Cookies.set("access_token", AccessTok, { expires: 7 });
      Cookies.set("refresh_token", RefreshTok, { expires: 7 });


      navigate("/");
    } catch (err) {
      console.error("Gender selection failed:", err);
      setError(err.response?.data?.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="z-10 relative flex flex-col w-full justify-center items-center h-screen">
      <div 
      className="sm:w-3/12 w-6/12 flex flex-col sm:gap-6 gap-3"
      >
        {/* Female Button */}
        <button
          onClick={() => setSelected("female")}
          className={`flex rounded-3xl flex-col justify-center items-center sm:p-10 p-8 backdrop-blur-md cursor-pointer border ${
            selected === "female" ? "border-white" : "border-[#212121]"
          }`}
        >
          <div
            className={`border flex justify-center items-center rounded-full border-white p-5 w-fit ${
              selected === "female" ? "bg-white" : ""
            }`}
          >
            <img
              src={Female}
              className={`h-10 ${selected === "female" ? "brightness-0" : "invert"}`}
              alt="Female"
            />
          </div>
          <h3 className="text-white mt-2">Female</h3>
        </button>

        {/* Male Button */}
        <button
          onClick={() => setSelected("male")}
          className={`flex rounded-3xl flex-col justify-center items-center sm:p-10 p-8 backdrop-blur-md cursor-pointer border ${
            selected === "male" ? "border-white" : "border-[#212121]"
          }`}
        >
          <div
            className={`border flex justify-center items-center rounded-full border-white p-5 w-fit ${
              selected === "male" ? "bg-white" : ""
            }`}
          >
            <img
              src={Male}
              className={`h-10 ${selected === "male" ? "brightness-0" : "invert"}`}
              alt="Male"
            />
          </div>
          <h3 className="text-white mt-2">Male</h3>
        </button>
      </div>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      <input
        className="sm:w-3/12 bg-white cursor-pointer text-black font-bold rounded-full sm:p-4 p-3 m-5 self-center"
        type="button"
        value={loading ? "Saving..." : "Continue"}
        onClick={handleContinue}
        disabled={loading}
      />
    </section>
  );
}

export default SelGender;
