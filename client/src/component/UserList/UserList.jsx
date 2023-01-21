import './UserList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
import { useState } from 'react'

export default function UserList(){
    const [input, setInput] = useState('')
    const list = useSelector(state => state.users.list)

    function handleInput(e){
        e.preventDefault()
        setInput(e.target.value)

    }
    return(
        <div>
            <form> 
                <input onChange={handleInput} value={input} type="search" placeholder="Search..." aria-label="Search"/> 
            </form> 
                     <div className='user-list'>
                        <div>
                            {input?list.filter(user => {
                               
                            let searchUser = input.toUpperCase()
                            
                            return searchUser && user.name.toUpperCase().startsWith(searchUser) 
                        })
                        .map(user=>(
                            
                            <div key={user.id} id={user.name}>
                                <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>
                            </div>

                        ))
                             :list?.map((user)=>{
            
                                return <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>

                             })
                            }
                        </div>
                     </div>
        </div>
    )
}