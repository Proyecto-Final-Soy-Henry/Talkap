import style from "./Home.module.css";
//IMPORT HOOKS
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch } from "react-redux"

//IMPORTO LAS ACCIONES Y LES CAMBIO EL NOMBRE
import {setUserList as actionUserList} from '../../store/slices/users/index.js'
import {setChatList as actionChat} from '../../store/slices/chats/index.js'
import {setMyData as actionMyData} from '../../store/slices/users/index.js'
import {setMessage as actionSetMessage} from '../../store/slices/chats/index.js'
//IMPORT COMPONET
import Nav from '../Nav/Nav.jsx';
import Profile from "../Profile/Profile.jsx";
import Chat from '../Chat/Chat.jsx';
import RightHome from "../RightHome/RightHome";
// import { userValidator } from "../../services/validator.js";
import UserList from "../UserList/UserList";
import { useState } from "react";
import {sendMessage} from  '../../services/sockets.js';

//IMPORT SERVICE
import {
  listenUsers,
  listenId,
  initiateSocket,
   listenGroup,
   sendBio,
   sendInfo,
   sendPicInfo,
  } from '../../services/sockets.js'


//COMPONETE HOME
export default function Home() {
  // const {Enter, setEnter} = useState("button")
  const dispatch =  useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const {list} = useSelector(state=>state.chat);
  useEffect(() => {
    if (!isAuthenticated) {
      //SI NO ESTOY AUTENTICADO
        //REDIRECCIONO A :
      navigate("/");
    } else {
          //SI ESTOY AUTENTICADO 
          
      // INICIALIZO MI STORE
      initiateSocket(user);
//MANEJADOR DE SALA ID
const  handleActions= ({myData,message,msj})=>{
 
  if(myData&&Object.entries(myData).length!==0){
    dispatch(actionMyData(myData)) 
  }
   if(message&&message.length){
    dispatch(actionChat(message))
  }
  if(msj&&Object.entries(msj).length!==0){
        dispatch(actionSetMessage(msj))      
  }

}
   
      //esucho y seteo mi estado user {list}
      listenUsers(dispatch,actionUserList)
      listenId(user.email,handleActions);
      listenGroup(dispatch,actionSetMessage);
      sendInfo(dispatch,actionMyData)
      sendPicInfo(dispatch,actionMyData)
      sendBio(dispatch,actionMyData)

    }

    
  }, [isAuthenticated, navigate, user,dispatch]);


//RETURN COMPONENTE HOME
  return (
    <div className={style.home}>
      
      {user ? (
         <>
        {/* <NavTop/> */}
        <div className={style.chat}> 
         <Nav/>
         <button className="button" onClick={()=>{
          // handleChatOff()
          sendMessage("chat",{user:user.name})}}>Enter</button>
         <Chat/>
         <RightHome/>
        </div>
          </>
      ) : null}
    </div>
  );
} 
