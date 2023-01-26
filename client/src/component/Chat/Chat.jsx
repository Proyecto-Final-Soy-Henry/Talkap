import style from  './Chat.module.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import ChatCard from '../ChatCard/CardChat';
// import LogoGiratorio from '../LogoGiratorio/LogoGiratorio.jsx'
import { useSelector } from 'react-redux';

import {errorMessageNull} from '../../services/sweetalert.js'
import {sendMessage} from  '../../services/sockets.js';

export default function Chat(){
 const {list } = useSelector(state=>state.chat);
 const {my,addressee} = useSelector(state=>state.users);
 
//tengo que devolver sólo últimos 6 mensajes

   const messages = list.filter(msj=>{
    return (msj.user===addressee?.email&&msj.receiver===my.email)||msj.receiver===addressee?.email
    });
    const value = list.length>6?messages.slice(messages.length-6):messages;
 



 const buttonHandler = (message)=>{

    if(message){sendMessage('chat',{user:my.email,message,receiver:addressee.email})}
  
    else{errorMessageNull();}
    
   }
   return (<div className={style.chat}>
          {!addressee&&(<>
            
            {/* <LogoGiratorio/> */}
          </>)}  
          {addressee&&<ChatCard picture={addressee.picture} email={addressee.email}/>}
          {addressee&&<ChatRender menssages={value}/>}
          {addressee&& <ChatInput buttonHandler={buttonHandler}/>}
          
         
    </div>);
}