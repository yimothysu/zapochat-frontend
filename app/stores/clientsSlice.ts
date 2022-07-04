import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Client = {
  name: string;
};

export type NewClientAction = {
  id: string;
  name: string;
};

const initialState: { [id: string]: Client } = {};

const clientsSlice = createSlice({
  name: "clients",
  initialState: initialState,
  reducers: {
    newClient: (state, action: PayloadAction<NewClientAction>) => {
      state[action.payload.id] = {
        name: action.payload.name,
      };
    },
    removeClient: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { newClient, removeClient } = clientsSlice.actions;
export default clientsSlice.reducer;
