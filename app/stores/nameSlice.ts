import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { join } from "../lib/sendEvents";

const initialState: { name: string } = { name: "" };

const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      join(action.payload);
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
