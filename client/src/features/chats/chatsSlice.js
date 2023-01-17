import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  globalChats: [],
};

export const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    allChats: () => {},
  },
});

export const {} = chatsSlice.actions;

export default chatsSlice.reducer;
