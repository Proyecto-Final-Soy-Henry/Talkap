import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {sendMessage} from  '../../services/sockets.js'

const { user} = useAuth0

export default function EnterGlobal(props){
 

   return (<div className='chat'>

    <Link to="/home1" onClick={()=>sendMessage("chat",{user:user.name})}>Enter</Link>
    
    </div>);
}