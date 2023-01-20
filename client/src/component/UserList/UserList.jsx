import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
export default function UserList(){
    
    

   
     const {list} =  useSelector(state=>state.users)
    return(<div className='user-list'>
        <h1>Lista de Usuarios TALKAP</h1>
        {list?.map((user,index)=>{
            console.log(user)
            return <UserCard name={user.name} picture={user.picture}/>
        })}
    </div>)
}