import {configureStore} from '@reduxjs/toolkit'
import users  from './slices/users';
export default configureStore({
    reducer:{
        users
    }
});

