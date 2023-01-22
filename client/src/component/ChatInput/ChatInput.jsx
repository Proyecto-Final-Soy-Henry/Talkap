import style from "./ChatInput.module.css";
import { useState } from "react";

export default function ChatInput({ buttonHandler }) {
  const [message, setMessage] = useState("");
  const handlerSubmit = (e) => {
    e.preventDefault();
    buttonHandler(message);
    setMessage("");
  };

  return (
    <div className={style.chat}>
      <form className={style.formContainer} onSubmit={handlerSubmit}>
        <input
          placeholder="Escribe un mensaje..."
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
