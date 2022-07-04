import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReceiveMsg } from "../types/msg";

type MsgsState = {
  [id: string]: ReceiveMsg[];
};

type ReceiveMsgAction = {
  channel: string;
  receiveMsg: ReceiveMsg;
};

const initialState: MsgsState = { general: [] };

const msgsSlice = createSlice({
  name: "msgs",
  initialState: initialState,
  reducers: {
    newMsg: (state, action: PayloadAction<ReceiveMsgAction>) => {
      state[action.payload.channel].push(action.payload.receiveMsg);
    },
    newChannel: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
  },
});

export const { newMsg, newChannel } = msgsSlice.actions;
export default msgsSlice.reducer;
