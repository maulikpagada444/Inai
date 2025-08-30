import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import step1 from "../../public/animations/videoStep1.json";
import step2 from "../../public/animations/videoStep2.json";
import step3 from "../../public/animations/videoStep3.json";
import step4 from "../../public/animations/videoStep4.json";
import step5 from "../../public/animations/videoStep5.json";
import step6 from "../../public/animations/videoStep6.json";
import step7 from "../../public/animations/videoStep7.json";
const signupVideos = {
    1: [step1],        // Screen 1 (NewUser)
    2: [step2],        // Screen 2 (OtpVerification)
    3: [step3],        // Screen 3 (SelGender)
};
const loginVideos = {
    1: [step4],        // Login Step 1
    2: [step5],        // Login Step 2
    3: [step6],        // Login Step 3
    4: [step7]         // Login Step 4
};


function Amimation({ flow, step }) {

    const [index, setIndex] = useState(0);
    // whenever step change → reset to first animation of that step
    useEffect(() => {
        setIndex(0);
    }, [step]);
    const currentVideos =
        flow === "signup"
            ? signupVideos[step] || []
            : flow === "login"
                ? loginVideos[step] || []
                : [];
    if (currentVideos.length === 0) return null;
    return (
        <div className="hidden md:absolute bottom-0 md:block h-screen w-screen">
            <Lottie
                key={index} // 👈 important for re-render
                animationData={currentVideos[index]}
                loop={false}
                autoplay
                onComplete={() => {
                    if (index < currentVideos.length - 1) {
                        setIndex(index + 1); // next json play
                    }
                }}
                className="fixed left-0 right-0 object-cover  z-0 overflow-hidden"
            />
        </div>
    );
}

export default Amimation