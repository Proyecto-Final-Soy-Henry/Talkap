import {createSlice} from '@reduxjs/toolkit'
export const chatSlice = createSlice({
    name:'chat',
    initialState:{
        list:[]
    },
    reducers:{
        //actions
        setChatList: (state,action)=>{
            state.list = action.payload;
        }
    }
});

export const {setChatList} = chatSlice.actions;
export default chatSlice.reducer;