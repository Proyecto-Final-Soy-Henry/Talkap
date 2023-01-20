import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
export default function UserList(){
    
    

   
     const {list} =  useSelector(state=>state.users)
    return(<div  className='user-list'>
        <h1>Usuarios</h1>
        {list?.map((user)=>{
            return <UserCard key={user.name} name={user.name} picture={user.picture}/>
        })}
    </div>)
}