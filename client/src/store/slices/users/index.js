import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    listCopy: [],
    listSearch: [],
    my: {},
    selected: null,
    addressee: null,
    
  },
  reducers: {
    //actions
    setUserList: (state, action) => {
      state.list = action.payload;
      console.log("este es el dispatch de setUserList");
      // state.listCopy = action.payload;
    },
    setMyData: (state, action) => {
      state.my = action.payload;
    },
    // setFriend:(state, action) => {
    //   if(state.friends.find((e)=>{
    //    return e.email == action.payload.email
    //   })){return}
    //   else state.friends = [...state.friends ,action.payload];
    // },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setSearch: (state, action) => {
      state.listCopy = action.payload;
    },
    setListSearch: (state, action) => {
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
    setAddressee: (state, action) => {
      
      state.addressee = action.payload;
    },
   
  },
});

export const {
  setUserList,
  setMyData,
  setSelected,
  setSearch,
  filterUsers,
  setListSearch,
  setAddressee,
  setFriend
} = userSlice.actions;
export default userSlice.reducer;
