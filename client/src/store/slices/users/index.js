import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({

    name:'users',
    initialState:{
        list:[],
        my:{},
        selected:null,
    },

    reducers:{
        //actions
        setUserList: (state,action)=>{
            state.list = action.payload;
        },
        setMyData: (state,action)=>{
            state.my = action.payload  
        },
        setSelected: (state,action)=>{
            state.selected = action.payload;
        },
    }
});

export const {setUserList,setMyData,setSelected} = userSlice.actions;
export default userSlice.reducer;

