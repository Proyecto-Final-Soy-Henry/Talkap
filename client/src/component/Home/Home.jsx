import style from "./Home.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {listenChat, setUserList} from '../../services/sockets.js'
import {setUserList as actionUser} from '../../store/slices/users/index.js'
import {setChatList as actionChat} from '../../store/slices/chats/index.js'
import {useDispatch, useSelector } from "react-redux"
import Chat from '../Chat/Chat.jsx';
import {sendMessage} from  '../../services/sockets.js';
// import { userValidator } from "../../services/validator.js";
import UserList from "../UserList/UserList";
import {initiateSocket} from '../../services/sockets.js'
import ChatRender from "../ChatRender/ChatRender";
export default function Home() {
  const {list} = useSelector(state=>state.chat);
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

 const buttonHandler = (msj)=>{
  sendMessage('chat',{user:user.name,message:msj})
 }

  return (
    <div className={style.home}>
      {user ? (
        <>
          {" "}
          <h1>Bienvenido </h1>
          <LogoutButton />
          <UserList/>
          <ChatRender menssages={list}/>
          <Chat buttonHandler={buttonHandler}/>
        </>
      ) : null}
    </div>
  );
}
