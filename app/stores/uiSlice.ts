import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UIState = {
  channelsDrawerOpen: boolean;
  clientsDrawerOpen: boolean;
};

const initialState: UIState = {
  channelsDrawerOpen: false,
  clientsDrawerOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setChannelsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.channelsDrawerOpen = action.payload;
    },
    setClientsDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.clientsDrawerOpen = action.payload;
    },
  },
});

export const { setChannelsDrawerOpen, setClientsDrawerOpen } = uiSlice.actions;
export default uiSlice.reducer;
