import style from "./Home.module.css";
//IMPORT HOOKS
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//IMPORTO LAS ACCIONES Y LES CAMBIO EL NOMBRE
import { setUserList as actionUserList } from "../../store/slices/users/index.js";
import { setChatList as actionChat } from "../../store/slices/chats/index.js";
import { setMyData as actionMyData } from "../../store/slices/users/index.js";
//IMPORT COMPONET
import Nav from "../Nav/Nav.jsx";
import Chat from "../Chat/Chat.jsx";
import UserList from "../UserList/UserList";
import RightHome from "../RightHome/RightHome";

//IMPORT SERVICE
import {
  initiateSocket,
  getChat,
  getUserList,
  getMyData,
  getMenssages,
} from "../../services/sockets.js";

//COMPONETE HOME
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  //EFECTO
  useEffect(() => {
    if (!isAuthenticated) {
      //SI NO ESTOY AUTENTICADO
      //REDIRECCIONO A :
      navigate("/");
    } else {
      //SI ESTOY AUTENTICADO
      // INICIALIZO MI STORE
      initiateSocket(user);
      getUserList(dispatch, actionUserList);
      getChat(dispatch, actionChat);
      getMyData(dispatch, actionMyData);
      getMenssages(user);
    }
  }, [isAuthenticated, navigate, user, dispatch]);

  //RETURN COMPONENTE HOME
  return (
    <div className={style.home}>
      {user ? (
        <>
          <Nav />
          <Chat />
          {/* <UserList /> */}

          <RightHome />
        </>
      ) : null}
    </div>
  );
}
