import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/button";
import { sendMessage } from "../../services/sockets";
import {errorExit} from '../../services/sweetalert.js'
import "./LogoutButton.css"
import {BsBoxArrowInRight} from 'react-icons/bs'
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
    <Button onClick={handler} w="24" h="32px" rightIcon={<BsBoxArrowInRight/>} colorScheme="red" variant='solid'>
      Log Out
    </Button>
  );
};

export default LogoutButton;