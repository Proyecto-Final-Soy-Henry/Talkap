import { useAuth0 } from "@auth0/auth0-react";
import { sendMessage } from "../../services/sockets";
const LogoutButton = () => {
  const {user, logout } = useAuth0();
  const handler = ()=>{
    sendMessage('exit',user)
    logout();
  }

  return (
    <button onClick={handler}>
      Log Out
    </button>
  );
};

export default LogoutButton;