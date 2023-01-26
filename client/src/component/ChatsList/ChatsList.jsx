import './ChatsList.css'
import {useSelector } from "react-redux"
import UserCard from '../UserCard/UserCard'
import {setAddressee} from '../../store/slices/users/index.js'
import { useDispatch } from 'react-redux'
import SalaCard from '../SalaCard/SalaCard'

export default function ChatsList(){
    
    
    const dispatch =  useDispatch();
    const handle = (user)=>{
        dispatch(setAddressee(user))
     }
    
     const {messages} =  useSelector(state=>state.chat)
     const {list,my,addressee} =  useSelector(state=>state.users)
 // obtengo la lista de  los usuarios que me mandaron mensajes
     let listUser = [];
     

     

      messages.forEach(msj => {
        
       console.log(msj)
        //consulto si ya tengo ese usuario en mi lista
       if(!listUser.some(user=>user.email===msj.user)&&msj.user!==my.email&&msj.receiver!=='group@talkap'){
         // si no lo tengo lo busco en el array de users, y lo pusheo
        list.forEach(e=>{
            if(e.email===msj.user){
                listUser.push(e)
            }
        });

       //consulto si ya tengo ese usuario en mi lista
       }else if(!listUser.some(user=>user.email===msj.receiver) && msj.receiver!==my.email){
         // si no lo tengo lo busco en el array de users, y lo pusheo
        list.forEach(e=>{
            if(e.email===msj.receiver){
                listUser.push(e)
            }
        });
       }

     });

    

    return(<div  className='user-list'>
      
        {listUser?.map((user,index)=>{
    
            
            const message = messages.filter(msj=>{
               
                // msj.user !== my.email ? noti = true : noti = false
                
                return msj.receiver===user.email || msj.user === user.email
                 
             });
            
            
             let lastMessage =[]
            //  console.log(noti)
             lastMessage.push(message[message.length -1])

             
             
            return <SalaCard key={index} user={user} handle={handle} message={lastMessage}/>

        })}
    </div>)
}