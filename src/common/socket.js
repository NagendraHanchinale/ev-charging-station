// src/common/socket.js
import { io } from "socket.io-client";

// Replace with your actual backend IP or URL
const socket = io("http://10.228.228.244:5000", {
  transports: ['websocket'],
  autoConnect: true,
});

export default socket;
