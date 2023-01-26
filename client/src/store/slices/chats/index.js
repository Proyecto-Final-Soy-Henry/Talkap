import {createSlice} from '@reduxjs/toolkit'
export const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        //actions
        setChatList: (state,action)=>{
            state.messages = action.payload;
        },
        setMessage:(state,action)=>{
            state.messages = [...state.messages,action.payload];
        },
    }
});

export const {setChatList,setMessage} = chatSlice.actions;
export default chatSlice.reducer;