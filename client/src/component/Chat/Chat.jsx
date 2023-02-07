import style from "./Chat.module.css";
import ChatRender from "../ChatRender/ChatRender.jsx";
import ChatInput from "../ChatInput/ChatInput.jsx";
import ChatCard from "../ChatCard/CardChat";
// import LogoGiratorio from '../LogoGiratorio/LogoGiratorio.jsx'
import { useSelector } from "react-redux";
import { sendMessage } from "../../services/sockets.js";
import InitialHome from "./InitialHome";

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

    message.sort((a,b)=>{
      return a.id-b.id;
    })

  const buttonHandler = (message, image, video, audio) => {
    if (message.trim() || image || video || audio) {
      sendMessage("chat", {
        user: my.email,
        message,
        receiver: addressee.email,
        image,
        video,
        audio,
      });
    }
    ///agregue image, video ya que al no completar el input con palabras decia que estaba vacio
  };
  return (
    <div className={style.chat}>
      {!addressee && (
        <>
          <InitialHome />
        </>
      )}
      {addressee && (
        <ChatCard
          picture={addressee.picture}
          email={addressee.email}
          name={addressee.name}
        />
      )}
      {addressee && <ChatRender menssages={message} />}
      {addressee && <ChatInput buttonHandler={buttonHandler} />}
    </div>
  );
}
