import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ErrorState = {
  id: string;
  msg: string;
};

const initialState: ErrorState[] = [];

const errorsSlice = createSlice({
  name: "errors",
  initialState: initialState,
  reducers: {
    newError: (state, action: PayloadAction<ErrorState>) => {
      if (!state.find((curr) => curr.id === action.payload.id)) {
        state.push(action.payload);
      }
      return state;
    },
    resolveError: (state, action: PayloadAction<ErrorState>) => {
      return state.filter((curr) => {
        return curr.id !== action.payload.id;
      });
    },
  },
});

export const { newError, resolveError } = errorsSlice.actions;
export default errorsSlice.reducer;
