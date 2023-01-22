import { useAuth0 } from "@auth0/auth0-react";
import { sendMessage } from "../../services/sockets";
import {errorExit} from '../../services/sweetalert.js'
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
    <button onClick={handler}>
      Log Out
    </button>
  );
};

export default LogoutButton;