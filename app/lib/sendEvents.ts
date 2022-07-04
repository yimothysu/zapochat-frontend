import { SendMsg } from "../types/msg";
import { socket } from "./socketio";

export const join = (name: string) => {
  socket.emit("join", name);
};

export const sendMessage = (msg: SendMsg) => {
  socket.emit("sendMsg", msg);
};

export const createChannel = (name: string) => {
  socket.emit("createChannel", name);
};
