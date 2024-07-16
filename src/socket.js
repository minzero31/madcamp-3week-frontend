import { io } from "socket.io-client";

const socket = io("http://172.10.7.127");

export default socket;
