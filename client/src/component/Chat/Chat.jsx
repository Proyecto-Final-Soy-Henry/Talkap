import style from "./Chat.module.css";
import { useState } from "react";

export default function Chat({ buttonHandler }) {
  const [message, setMessage] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    buttonHandler(message);
    setMessage("");
  };

  return (
    <div className={style.chat}>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
