import { useEffect } from 'react'
import style from './Card.module.css'
export default function Card  ({user,handle}){

    useEffect(()=>{},[user]);
    return (<div key={user.email} className={style.card}>



            <img src={user.picture} alt={user.email}/>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>fecha de registro : {user.createdAt.slice(0,10)}</div>
            {user.blacklist?
            <button className={style.unbaned} onClick={()=>{handle()}}>Desbanear Usuario</button>
            :<button className={style.baned} onClick={()=>{handle()}}>Banear Usuario</button>}
            
            
            


    </div>)
}