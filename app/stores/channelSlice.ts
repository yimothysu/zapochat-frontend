import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const channelSlice = createSlice({
  name: "channel",
  initialState: "general",
  reducers: {
    setChannel: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setChannel } = channelSlice.actions;
export default channelSlice.reducer;
