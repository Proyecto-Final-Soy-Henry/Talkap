import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {listenChat, setUserList} from '../../services/sockets.js'
import {setUserList as actionUser} from '../../store/slices/users/index.js'
import {setChatList as actionChat} from '../../store/slices/chats/index.js'
import {useDispatch, useSelector } from "react-redux"
import EnterGlobal from "../EnterGlobal/EnterGlobal.jsx"
import Nav from '../Nav/Nav.jsx';
import Profile from "../Profile/Profile.jsx";
import Chat from '../Chat/Chat.jsx';
// import { userValidator } from "../../services/validator.js";
import UserList from "../UserList/UserList";
import {initiateSocket} from '../../services/sockets.js'
import { useState } from "react";
import {sendMessage} from  '../../services/sockets.js';

export default function Home() {
  // const {Enter, setEnter} = useState("button")
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const {list} = useSelector(state=>state.chat);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      // userValidator(user);
      initiateSocket(user);
      // handleChatGlobal()
      setUserList(dispatch,actionUser)
      listenChat(dispatch,actionChat);
    }
  }, [isAuthenticated, navigate, user,dispatch]);

  // const handleChatGlobal = () =>{
  //   setEnter("button")
  // }
  // const handleChatOff = () =>{
  //   setEnter("off")
  // }
  
  return (
    <div className="home">
      {user ? (
        <> 
        
         <Nav/>
         <button className="button" onClick={()=>{
          // handleChatOff()
          sendMessage("chat",{user:user.name})}}>Enter</button>
         <Chat/>
        
         <UserList/>  

         <Profile/>
        </>
      ) : null}
    </div>
  );
}
