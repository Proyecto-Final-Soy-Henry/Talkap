import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PopUp from "../Alerts/PopUp/PopUp";
import style from "./LogoutButton.module.css";
import { sendMessage } from "../../services/sockets";

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  const [state, setState] = useState(false);

  const handleLogOut = () => {
    setState(true);
  };

  return (
    <div>
      <button onClick={() => handleLogOut()}>Log Out</button>
      <div className={style.popUp}>
        {state ? (
          <PopUp
            titulo="¿Seguro queres cerrar sesion?"
            confirm={() => {sendMessage('exit',user) 
                            logout({ returnTo: window.location.origin })}}
            close={() => setState(false)}
          />
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default LogoutButton;
