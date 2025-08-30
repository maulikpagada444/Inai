// src/components/AuthRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function AuthRedirect({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        const user_id = Cookies.get("user_id");
        const email = Cookies.get("email");
        const username = Cookies.get("username");
        const token = Cookies.get("access_token");
        const refresh_token = Cookies.get("refresh_token");

        if (user_id && email && username && token && refresh_token) {
            navigate("/", { replace: true });
        }
    }, [navigate]);

    return children;
}
