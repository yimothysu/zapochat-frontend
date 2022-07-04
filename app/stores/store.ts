import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";
import clientsReducer from "./clientsSlice";
import msgsReducer from "./msgsSlice";
import errorsReducer from "./errorsSlice";
import channelReducer from "./channelSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    name: nameReducer,
    clients: clientsReducer,
    msgs: msgsReducer,
    errors: errorsReducer,
    channel: channelReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
