import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import chatsReducer from "../features/chats/chatsSlice";

export const store = configureStore({
  reducer: { usersReducer, chatsReducer },
});
