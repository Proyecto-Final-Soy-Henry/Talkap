import style from "./Home.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {setUserList} from '../../services/sockets.js'
import {setUserList as action} from '../../store/slices/users/index.js'
import {useDispatch } from "react-redux"
// import { userValidator } from "../../services/validator.js";
import UserList from "../UserList/UserList";
import {initiateSocket} from '../../services/sockets.js'
export default function Home() {
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      // userValidator(user);
      initiateSocket(user);
      setUserList(dispatch,action)
    }
  }, [isAuthenticated, navigate, user,dispatch]);

  return (
    <div className={style.home}>
      {user ? (
        <>
          {" "}
          <h1>Bienvenido </h1>
          <LogoutButton />
          <UserList/>
        </>
      ) : null}
    </div>
  );
}
