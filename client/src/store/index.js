import {configureStore} from '@reduxjs/toolkit'
import users  from './slices/users';
import chat from './slices/chats'
export default configureStore({
    reducer:{
        users,
        chat,
    }
});

