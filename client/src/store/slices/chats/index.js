import {createSlice} from '@reduxjs/toolkit'
export const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[],
        allMessages:[],
    },
    reducers:{
        //actions
        setChatList: (state,action)=>{
            state.messages = action.payload;
        },
        setMessage:(state,action)=>{
            //guardo en una variable un booleano si está o no repetido
            const repeat = state.messages.some(msj=>msj.id===action.payload.id)
            //en caso de que no pusheo el msj
            if(!repeat){ state.messages = [...state.messages,action.payload]}
               
            
           
        },
        setAllMessages:(state,action)=>{
            state.allMessages = action.payload;
        },
    }
});

export const {setChatList,setMessage,setAllMessages} = chatSlice.actions;
export default chatSlice.reducer;