import './Chat.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import {sendMessage} from  '../../services/sockets.js';
import { useSelector } from 'react-redux';
export default function Chat(){
 const {list } = useSelector(state=>state.chat);
 const {my,selected} = useSelector(state=>state.users);
// //tengo que devolver sólo últimos 6 mensajes
 const messages = list;
 const value = messages.length>6?messages.slice(messages.length-6):messages;
 


 const buttonHandler = (message)=>{
    sendMessage('chat',{user:my.email,message,receiver:selected.email})
   }
   return (<div className='chat'>
          {selected?<><h1>{selected.name}</h1>
          <img alt={selected.name} src={selected.picture} className='img-sala'/></>:<h1>Seleciona un usuario</h1>} 
          <ChatRender menssages={value}/>
          <ChatInput buttonHandler={buttonHandler}/>
    </div>);
}