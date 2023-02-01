import style from "./Home.module.css";
//IMPORT HOOKS
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";

//IMPORTO LAS ACCIONES Y LES CAMBIO EL NOMBRE
import {  setUserList as actionUserList } from "../../store/slices/users/index.js";
import { setChatList as actionChat } from "../../store/slices/chats/index.js";
import { setMyData as actionMyData } from "../../store/slices/users/index.js";
import { setMessage as actionSetMessage } from "../../store/slices/chats/index.js";
//IMPORT COMPONET
import Nav from "../Nav/Nav.jsx";
import Chat from "../Chat/Chat.jsx";
import RightHome from "../RightHome/RightHome";
import Dashboard from "../Dashboard/Dashboard";

//IMPORT SERVICE
import {
  listenUsers,
  listenId,
  initiateSocket,
  listenGroup,
  sendBio,
  sendInfo,
  sendPicInfo,
  
} from "../../services/sockets.js";

//COMPONETE HOME
export default function Home() {
  const [modal,setModal] = useState(false);
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
      console.log("entra en el else");
      // INICIALIZO MI STORE
      initiateSocket(user);
      //MANEJADOR DE SALA ID
      const handleActions = ({ myData, message, msj }) => {
        if (myData && Object.entries(myData).length !== 0) {
          dispatch(actionMyData(myData));
        }
        if (message && message.length) {
          console.log("cualquier cosa ", message);
          dispatch(actionChat(message));
        }
        if (msj && Object.entries(msj).length !== 0) {
          dispatch(actionSetMessage(msj));
        }
      };

      //esucho y seteo mi estado user {list}
      listenUsers(dispatch, actionUserList);
      listenId(user.email, handleActions);
      listenGroup(dispatch, actionSetMessage);
      sendInfo(dispatch, actionMyData);
      sendPicInfo(dispatch, actionMyData);
      sendBio(dispatch, actionMyData);
     
    }
  }, [isAuthenticated, navigate, user, dispatch]);

  //RETURN COMPONENTE HOME
  return (
    <div className={style.home}>
      {!modal&&user ? (
        <div className={style.chat}>
          <Nav handle={setModal} />
          <Chat />
          <RightHome />
        </div>
      ) : null}
      {modal&&<Dashboard handle={setModal}/>}
    </div>
  );
}
