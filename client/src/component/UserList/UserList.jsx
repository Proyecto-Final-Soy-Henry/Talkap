import { useEffect } from "react";
import { useSelector } from "react-redux"
import {getUserList} from '../../services/getUserList.js'
export default function UserList(){
    useEffect(()=>{
       getUserList() 
    },[])
    const {list} =  useSelector(state=>state.users);
    return(<div className='user-list'>

    </div>)
}