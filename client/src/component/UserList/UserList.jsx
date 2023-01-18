import './UserList.css'
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux"
import {getUserList} from '../../services/getUserList.js'

export default function UserList(){
    const dispatch = useDispatch();
    
    useEffect(()=>{
       getUserList(dispatch) 
    },[dispatch])
   
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