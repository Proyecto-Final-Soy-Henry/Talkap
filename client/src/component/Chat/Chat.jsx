import './Chat.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import {sendMessage} from  '../../services/sockets.js';
import { useSelector } from 'react-redux';
export default function Chat(){
 const {list} = useSelector(state=>state.chat);
 const {my} = useSelector(state=>state.users);
 const buttonHandler = (msj)=>{
    sendMessage('chat',{user:my.name,message:msj})
   }
   return (<div className='chat'>

          <ChatRender menssages={list}/>
          <ChatInput buttonHandler={buttonHandler}/>
    </div>);
}