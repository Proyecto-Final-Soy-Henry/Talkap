import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
import {setSelected} from '../../store/slices/users/index'
import { useDispatch } from 'react-redux'
export default function UserList(){
    
    const dispatch =  useDispatch();

   
     const {list} =  useSelector(state=>state.users)
     const handle = (user)=>{
        dispatch(setSelected(user))
     }
    return(<div  className='user-list'>
        
        {list?.map((user)=>{
            return <UserCard user={user} handle={handle}/>

        })}
    </div>)
}