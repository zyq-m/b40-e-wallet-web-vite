import { io } from "socket.io-client";
// const token = localStorage.getItem("access-token");

export const socket = io(import.meta.env.VITE_API, {
  auth: {
    token: localStorage.getItem("access-token"),
  },
});
