import './Chat.css';
import ChatRender from '../ChatRender/ChatRender.jsx';
import ChatInput from '../ChatInput/ChatInput.jsx';
import {sendMessage} from  '../../services/sockets.js';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

export default function Chat(){



 const {list} = useSelector(state=>state.chat);
 const { user } = useAuth0();
 const buttonHandler = (msj)=>{
    sendMessage('chat',{user:user.name,message:msj})
   }

   return (<div className='chat'>

          <ChatRender menssages={list}/>
          <ChatInput buttonHandler={buttonHandler}/>
    </div>);
}