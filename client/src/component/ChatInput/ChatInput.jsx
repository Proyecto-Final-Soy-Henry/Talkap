import style from "./ChatInput.module.css";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";

export default function ChatInput({ buttonHandler }) {
  const [message, setMessage] = useState("");

  const [image, setImage] = useState(null); //nuevo
  const [video, setVideo] = useState(null); //nuevo

  const reset = (e) => {
    if (image) setVideo(null);
    if (video) setImage(null);
    else setImage(null);
    setVideo(null);
  }; //para que no se envien varias cosas juntas(que puede ser una funcion util de la app mas adelante)

  const handleImage = (e) => {
    const file = e.target.files[0]; ///accedemos a la imagen/video que vamos a subir

    console.log(file);

    file.type.includes("video") || file.type.includes("image") ///si recibimos videos o imagenes haremos la subida en el input file
      ? setFile(file)
      : alert("Archivo no valido"); ///si no lanzo una alerta de que el archivo no es valido(probado que funciona con un archivo zip,rar)
    //aunque tambien se podria implementar
  };

  const setFile = (file) => {
    //funcion que convierte la imagen en datos legibles
    const filereader = new FileReader(); //metodo que convierte en codigo base 64
    filereader.readAsDataURL(file); //leemos la data que devuelve
    filereader.onload = () => {
      //le decimos que hacer
      file.type.includes("image") //si es tipo image
        ? setImage(filereader.result) //agregamos en el estado image el codigo base 64 que devuelve para dicha imagen
        : setVideo(filereader.result); //si no agregamos en lo que seria el video
    };
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    buttonHandler(message, image, video);
    setMessage("");
    setVideo(null); //seteamos en null al enviar el video e imagen
    setImage(null);
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handlerSubmit}>
        <div className={style.fileContainer}>
          <label className={style.labelFile} htmlFor="file">
            {<ImFilePicture />}
          </label>
          <input
            className={style.fileInput}
            type="file"
            id="file"
            onChange={(e) => {
              e.preventDefault(e);
              handleImage(e);
              reset(e);
            }}
          />
        </div>
        <input
          className={style.inputMessage}
          placeholder="Escribe un mensaje..."
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />

        <button className={style.buttonSubmit} type="submit">
          {<IoIosSend />}
        </button>
      </form>
    </div>
  );
}
