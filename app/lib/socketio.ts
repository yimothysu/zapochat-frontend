import { io } from "socket.io-client";
import { SOCKET_URL } from "../constants";
import { socketToEvents } from "./receiveEvents";

const initSocketIo = () => {
  const socket = io(SOCKET_URL);

  const events = socketToEvents(socket);
  Object.keys(events).forEach((eventName: string) => {
    socket.on(eventName, events[eventName]);
  });

  return socket;
};

export const socket = initSocketIo();
