import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Animation from "../Amimation"
import Video from "../Video";
import NewUser from "../Auth/Register/NewUser";
import OtpVerification from "./Register/OtfVerification";
import SelGender from "../Auth/Register/SelGender";

function SignUp() {

    document.title = 'INAI : Sign Up';

  const navigate = useNavigate();

  useEffect(() => {
    const userId = Cookies.get("user_id");
    const email = Cookies.get("email");
    const username = Cookies.get("username");
    const token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");

    if (userId && email && username && token && refresh_token) {
      navigate("/", { replace: true }); // redirect to home
    }
  }, [navigate]);

  const [Step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const [ResOtp, setResOtp] = useState("");
  const [AccessTok, setAccessTok] = useState(null);
  const [RefreshTok, setRefreshTok] = useState(null);

  return (
    <>
      <Video />
      <Animation flow="signup" step={Step} />

      {Step === 1 && (
        <NewUser
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
          setResOtp={setResOtp}
        />
      )}
      {Step === 2 && (
        <OtpVerification
          formData={formData}
          resOtp={ResOtp}
          setStep={setStep}
          setAccessTok={setAccessTok}
          setRefreshTok={setRefreshTok}
        />
      )}
      {Step === 3 && (
        <SelGender
          AccessTok={AccessTok}
          RefreshTok={RefreshTok}
          email={formData.email}
        />
      )}
    </>
  );
}

export default SignUp;
