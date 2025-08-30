// src/socket.js
import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_IO;

export const socket = io(SOCKET_URL, {
  path: "/socket.io",
  transports: ["websocket"], // same as your working JS
  autoConnect: true,
  reconnection: true,
});
