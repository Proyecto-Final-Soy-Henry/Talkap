import {setUserList} from '../store/slices/users/index.js'
import { useDispatch } from 'react-redux'
export function getUserList(){
    const dispatch =  useDispatch();
    fetch('http://localhost:3001/users')
    .then(response=>response.json())
    .then(response=>dispatch(setUserList(response)))
    .catch(error=>{console.log(error)})
}