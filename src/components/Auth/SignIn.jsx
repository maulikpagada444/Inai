import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";

import Video from "../Video";
import Animation from "../Amimation";
import UserEntry from "./LogIn/UserEntry";
import ForgotePass from "./LogIn/ForgotePass";
import OtpVerification from "./LogIn/otpVerification";
import NewPassword from "./LogIn/NewPassword";

function SignIn() {

    document.title = 'INAI : Sign In';

    const [Step, setStep] = useState(1);
    const navigate = useNavigate();
    const [email, setEmail] = useState(null)

    useEffect(() => {
        const userId = Cookies.get("user_id");
        const email = Cookies.get("email");
        const username = Cookies.get("username");
        const token = Cookies.get("access_token");
        const refresh_token = Cookies.get("refresh_token");

        if (userId && email && username && token && refresh_token) {
            navigate("/", { replace: true });
        }
    }, [navigate]);



    return (
        <>
            <Video />
            <Animation flow="login" step={Step} />
            {Step == 1 ?

                <UserEntry
                    setStep={setStep}
                />
                : Step == 2 ?
                    <ForgotePass
                        setStep={setStep}
                        setEmail={setEmail}
                    />
                    : Step == 3 ?
                        <OtpVerification
                            setStep={setStep}
                            email={email}
                        />
                        : Step == 4 ?
                            <NewPassword
                                setStep={setStep}
                                email={email}
                            />
                            : ''
            }
        </>
    );
}

export default SignIn;
