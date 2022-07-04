import { Socket } from "socket.io-client";
import { newClient, NewClientAction, removeClient } from "stores/clientsSlice";
import { newError, resolveError } from "stores/errorsSlice";
import { newChannel, newMsg } from "stores/msgsSlice";
import { store } from "stores/store";
import { ReceiveMsg } from "types/msg";

type EventsType = { [key: string]: (arg0: any, arg1: any) => void };

export const socketToEvents: (arg0: Socket) => EventsType = (
  socket: Socket
) => ({
  connect: () => {
    store.dispatch(
      resolveError({
        id: "connect_error",
        msg: "Not connected. Attempting to reconnect...",
      })
    );
  },
  newClient: (newClientAction: NewClientAction) => {
    store.dispatch(newClient(newClientAction));
  },
  sendMsg: (channel: string, msg: ReceiveMsg) => {
    store.dispatch(newMsg({ channel, receiveMsg: msg }));
  },
  getMsgs: (channel: string, msgs: ReceiveMsg[]) => {
    if (!(channel in msgs)) {
      store.dispatch(newChannel(channel));
    }
    msgs.forEach((msg) => {
      store.dispatch(newMsg({ channel, receiveMsg: msg }));
    });
  },
  getClients: (clients: NewClientAction[]) => {
    clients.forEach((client) => {
      store.dispatch(newClient(client));
    });
  },
  removeClient: (clientId: string) => {
    store.dispatch(removeClient(clientId));
  },
  connect_error: () => {
    store.dispatch(
      newError({
        id: "connect_error",
        msg: "Not connected. Attempting to reconnect...",
      })
    );
  },
});
