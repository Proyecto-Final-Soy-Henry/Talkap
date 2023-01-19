import {setUserList} from '../store/slices/users/index.js'

export function getUserList(dispatch){
   
    fetch('http://localhost:3001/users')
    .then(response=>response.json())
    .then(response=>dispatch(setUserList(response)))
    .catch(error=>{console.log(error)})
}