import {createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name:'users',
    initialState:{
        list:[],
        my:{},
    },
    reducers:{
        //actions
        setUserList: (state,action)=>{
            
            state.list = action.payload;
        },
        setMyData: (state,action)=>{
            state.my = action.payload;
        },
    }
});

export const {setUserList,setMyData} = userSlice.actions;
export default userSlice.reducer;

