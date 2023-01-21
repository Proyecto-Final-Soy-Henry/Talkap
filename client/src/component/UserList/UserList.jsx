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
     const grupo ={
        name:"CHAT GRUPAL",
        email:"CHAT GRUPAL",
        picture:"https://png.pngtree.com/png-vector/20191130/ourlarge/pngtree-group-chat-icon-png-image_2054401.jpg",
        connected:true,

    }
    return(<div  className='user-list'>

        
        <UserCard user={grupo} handle={handle}/>
        
        {list?.map((user)=>{
            return <UserCard user={user} handle={handle}/>

        })}
    </div>)
}