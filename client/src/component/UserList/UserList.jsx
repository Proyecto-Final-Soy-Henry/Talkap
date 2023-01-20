import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
export default function UserList(){
    
    

   
     const {list} =  useSelector(state=>state.users)
    return(<div  className='user-list'>
        
        {list?.map((user)=>{
            
            return <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>

        })}
    </div>)
}