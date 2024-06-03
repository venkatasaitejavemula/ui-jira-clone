import { configureStore } from "@reduxjs/toolkit";
import ticketSlice from "./slice/ticketSlice";

const store = configureStore({
  reducer: {
    jira: ticketSlice.reducer,
  },
});

export default store;
