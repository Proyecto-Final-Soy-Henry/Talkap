import style from "./Chat.module.css";
import ChatRender from "../ChatRender/ChatRender.jsx";
import ChatInput from "../ChatInput/ChatInput.jsx";
import ChatCard from "../ChatCard/CardChat";
// import LogoGiratorio from '../LogoGiratorio/LogoGiratorio.jsx'
import { useSelector } from "react-redux";

import { errorMessageNull } from "../../services/sweetalert.js";
import { sendMessage } from "../../services/sockets.js";

export default function Chat() {
  const { messages } = useSelector((state) => state.chat);
  const { my, addressee } = useSelector((state) => state.users);

  //tengo que devolver sólo últimos 6 mensajes

  const message = messages.filter((msj) => {
    return (
      (msj.user === addressee?.email && msj.receiver === my.email) ||
      msj.receiver === addressee?.email
    );
  });
  

  const buttonHandler = (message, image, video) => {
    if (message || image || video) {
      sendMessage("chat", {
        user: my.email,
        message,
        receiver: addressee.email,
        image,
        video,
      });
    }
    ///agregue image, video ya que al no completar el input con palabras decia que estaba vacio
    else {
      errorMessageNull();
    }
  };
  return (
    <div className={style.chat}>
      {!addressee && <>{/* <LogoGiratorio/> */}</>}
      {addressee && (
        <ChatCard picture={addressee.picture} email={addressee.email} name={addressee.name} />
      )}
      {addressee && <ChatRender menssages={message} />}
      {addressee && <ChatInput buttonHandler={buttonHandler} />}
    </div>
  );
}
