import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    listCopy: [],
    listSearch: [],
    my: {},
    selected: null,
    
  },
  reducers: {
    //actions
    setUserList: (state, action) => {
      state.list = action.payload;
      // state.listCopy = action.payload;
    },
    setMyData: (state, action) => {
      state.my = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setSearch: (state, action) => {
      state.listCopy = action.payload;
    },
    setListSearch:(state, action) => {
      state.listSearch = action.payload;
    },
    filterUsers: (state, action) => {
      if (action.payload === "all") {
        state.listCopy = state.list;
      }
      if (action.payload === "connected") {
        const CONNECTED = state.list.filter((user) => user.connected === true);
        state.listCopy = CONNECTED;
      }
      if (action.payload === "disconnected") {
        const DISCONNECTED = state.list.filter(
          (user) => user.connected === false
        );
        state.listCopy = DISCONNECTED;
      }
    },
  },
});

<<<<<<< HEAD
export const { setUserList, 
  setMyData, 
  setSelected, 
  setSearch, 
  filterUsers,
  setListSearch 
} =
=======
export const { setUserList, setMyData, setSelected, setSearch, filterUsers,setListSearch } =
>>>>>>> 4baacc1d89f4af63cf01300ba6498e058bc49e6a
  userSlice.actions;
export default userSlice.reducer;
