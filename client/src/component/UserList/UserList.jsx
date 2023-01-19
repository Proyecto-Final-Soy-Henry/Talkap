import './UserList.css'
import {useSelector } from "react-redux"

export default function UserList(){
    
    

   
     const {list} =  useSelector(state=>state.users)
    return(<div className='user-list'>
        <h1>Lista de Usuarios TALKAP</h1>
        {list?.map((user,index)=>{
            return <div key={index}>
                <h3>{user.name}</h3>
                <img src={user.picture} alt={user.name}/>
                <br/>
            </div>
        })}
    </div>)
}