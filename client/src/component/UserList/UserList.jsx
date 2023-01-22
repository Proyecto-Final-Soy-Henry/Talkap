import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
import {setSelected} from '../../store/slices/users/index'
import { useDispatch } from 'react-redux'
import Profile from '../Profile/Profile.jsx'
import { useState } from 'react'
export default function UserList(){
    const [input, setInput] = useState('') 
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
    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)
    }
    return(<div  className='user-list'>
       
        <Profile/>
        <p className='p'>Perfil</p>
        <UserCard user={grupo} handle={handle}/>
        <form> 
                <input onChange={handleInput} value={input} type="search" placeholder="Search..." aria-label="Search"/> 
        </form> 
       
        {input?list.filter(user => {
                               
                               let searchUser = input.toUpperCase()
                               
                               return searchUser && user.name.toUpperCase().startsWith(searchUser) 
                           })
                           .map(user=>(
                               
                               <div key={user.id} id={user.name}>
                                   <UserCard user={user} handle={handle}/>
                               </div>
   
                           ))
            :list?.map((user)=>{
            return <UserCard user={user} handle={handle}/>

            })
        }
    </div>)
}