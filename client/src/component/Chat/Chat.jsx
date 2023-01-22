import style from  './Chat.module.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import {sendMessage} from  '../../services/sockets.js';
import { useSelector } from 'react-redux';
import {errorMessageNull} from '../../services/sweetalert.js'
import ChatCard from '../ChatCard/CardChat';
export default function Chat(){
 const {list } = useSelector(state=>state.chat);
 const {my,selected} = useSelector(state=>state.users);
// //tengo que devolver sólo últimos 6 mensajes
 const messages = list;
 const value = messages.length>6?messages.slice(messages.length-6):messages;
 


 const buttonHandler = (message)=>{
    if(message){sendMessage('chat',{user:my.email,message,receiver:selected.email})}
    else{errorMessageNull();}
    
   }
   return (<div className={style.chat}>
          {!selected&&(<>
            <h1>Bienvenido</h1>
            
            <h3>Seleciona una sala de Chat</h3>
          </>)}  
          {selected&&<ChatCard picture={selected.picture} email={selected.email}/>}
          {selected&&<ChatRender menssages={value}/>}
          {selected&& <ChatInput buttonHandler={buttonHandler}/>}
          
         
    </div>);
}