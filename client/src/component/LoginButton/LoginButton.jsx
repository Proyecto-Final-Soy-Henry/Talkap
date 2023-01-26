import style from "./LoginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const buttonHandler =()=>{
    
    loginWithRedirect()
  }

  return <button className={style.LoginButton} onClick={buttonHandler }>Log In</button>;
};

export default LoginButton;