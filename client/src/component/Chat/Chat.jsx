import './Chat.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import {sendMessage} from  '../../services/sockets.js';
import { useSelector } from 'react-redux';
export default function Chat(){
 const {list} = useSelector(state=>state.chat);
 const {my,selected} = useSelector(state=>state.users);
 const buttonHandler = (message)=>{
    sendMessage('chat',{user:my.email,message,receives:selected.email})
   }
   return (<div className='chat'>

          <ChatRender menssages={list}/>
          <ChatInput buttonHandler={buttonHandler}/>
    </div>);
}