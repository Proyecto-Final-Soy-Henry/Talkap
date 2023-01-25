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
 const {my,selected} = useSelector(state=>state.users);
 
//tengo que devolver sólo últimos 6 mensajes

   const messages = list.filter(msj=>{
    return (msj.user===selected?.email&&msj.receiver===my.email)||msj.receiver===selected?.email
    });
    const value = list.length>6?messages.slice(messages.length-6):messages;
 



 const buttonHandler = (message)=>{

    if(message){sendMessage('chat',{user:my.email,message,receiver:selected.email})}
  
    else{errorMessageNull();}
    
   }
   return (<div className={style.chat}>
          {!selected&&(<>
            
            {/* <LogoGiratorio/> */}
          </>)}  
          {selected&&<ChatCard picture={selected.picture} email={selected.email}/>}
          {selected&&<ChatRender menssages={value}/>}
          {selected&& <ChatInput buttonHandler={buttonHandler}/>}
          
         
    </div>);
}