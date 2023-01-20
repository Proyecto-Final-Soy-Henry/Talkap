import {createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name:'users',
    initialState:{
        list:[]
    },
    reducers:{
        //actions
        setUserList: (state,action)=>{
            state.list = action.payload;
        },
        getCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
    }
});

export const {setUserList,getCurrentUser} = userSlice.actions;
export default userSlice.reducer;

