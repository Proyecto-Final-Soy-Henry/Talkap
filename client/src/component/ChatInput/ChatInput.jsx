import style from "./ChatInput.module.css";
import "./ChatInput.css"
import { useState } from "react";

export default function ChatInput({ buttonHandler }) {
  const [message, setMessage] = useState("");
  const [inputCss, setInputCss] = useState('InputActive');
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(!message){
      return setInputCss("InputOff")
    }
    buttonHandler(message);
    setMessage("");
  }; 

  return (
    <div className={style.chat}>
      <form onSubmit={handlerSubmit}>
        <input
          className={inputCss}
          placeholder="Escribe un mensaje..."
          type="text"
          onChange={(e) => {
            e.target.value?setInputCss("InputActive"): console.log("off")
    
            setMessage(e.target.value);
          }}
          value={message}
        />
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
