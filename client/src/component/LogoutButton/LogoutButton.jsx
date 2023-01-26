import { useAuth0 } from "@auth0/auth0-react";
import { sendMessage } from "../../services/sockets";
import {errorExit} from '../../services/sweetalert.js'
import "./LogoutButton.css"
const LogoutButton = () => {
  const {user, logout } = useAuth0();
  const handler = ()=>{
    
    errorExit().then(response=>{
        if(response){
              sendMessage('exit',user)
              logout();
        }
  
    })
    
  }

  return (
    <button className="but" onClick={handler}>
     <span className="span">Log Out</span>
    </button>
  );
};

export default LogoutButton;