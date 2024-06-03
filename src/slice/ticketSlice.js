import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const ticketSlice = createSlice({
  name: "jira",
  initialState: initialState,
  reducers: {
    setTickets(state, action) {
      state.tickets = action?.payload;
    },
    setUsers(state, action) {
      state.users = action?.payload;
    },
  },
});

export const ticketSliceActions = ticketSlice.actions;

export default ticketSlice;
