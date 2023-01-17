import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  userDetail: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getAllUsers: () => {},
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
