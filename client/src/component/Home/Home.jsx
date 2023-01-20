import style from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {listenChat, setUserList} from '../../services/sockets.js'
import {setUserList as actionUser} from '../../store/slices/users/index.js'
import {setChatList as actionChat} from '../../store/slices/chats/index.js'
import {useDispatch } from "react-redux"
import Nav from '../Nav/Nav.jsx';
import Chat from '../Chat/Chat.jsx';
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
      setUserList(dispatch,actionUser)
      listenChat(dispatch,actionChat);
    }
  }, [isAuthenticated, navigate, user,dispatch]);



  return (
    <div className={style.home}>
      {user ? (
        <> 
         <Nav/>
         <Chat/>
         <UserList/>
        </>
      ) : null}
    </div>
  );
}
