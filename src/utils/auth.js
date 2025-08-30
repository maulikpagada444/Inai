// utils/auth.js
import Cookies from "js-cookie";

export function isUserLoggedIn() {
  return (
    Cookies.get("user_id") &&
    Cookies.get("email") &&
    Cookies.get("username") &&
    Cookies.get("access_token") &&
    Cookies.get("refresh_token")
  );
}
