import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setName as sN } from "../lib/sendEvents";

const initialState: { name: string } = { name: "" };

const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      sN(action.payload);
    },
  },
});

export const { setName } = nameSlice.actions;
export default nameSlice.reducer;
