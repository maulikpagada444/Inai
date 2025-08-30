// Context.jsx
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const AppContext = createContext(null);

// 2️⃣ Create the provider component
export const AppProvider = ({ children }) => {
    // Example state
    const [ReadOnly, setReadOnly] = useState([])
    const [InfoModeResponses, setInfoModeResponses] = useState([]);
    const [GlbModeResponses, setGlbModeResponses] = useState([]);


    return (
        <AppContext.Provider
            value={{
                ReadOnly, setReadOnly, InfoModeResponses, setInfoModeResponses, GlbModeResponses, setGlbModeResponses
            }}
        >
            {children}
        </AppContext.Provider>
    );
};



// 3️⃣ Custom hook to use the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
};
