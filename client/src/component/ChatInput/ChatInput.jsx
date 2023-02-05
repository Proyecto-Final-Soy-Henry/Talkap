import style from "./ChatInput.module.css";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import { Spinner } from "@chakra-ui/react";
import {AudioRecorder,useAudioRecorder} from  'react-audio-voice-recorder'/// npm i react-audio-voice-recorder 
import axios from 'axios' 

export default function ChatInput({ buttonHandler }) {
  const [message, setMessage] = useState("");
  const recorderControls = useAudioRecorder();
  const [image, setImage] = useState(null); //nuevo
  const [video, setVideo] = useState(null); //nuevo
  const [audio, setAudio] = useState(null); //nuevo

  const transformaraudio = async(blob)=>{
    const formData = new FormData();
    formData.append('file', blob);
    console.log(formData);
    const data= await axios.post('/audioconverter',formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })        
    console.log(data)
    reset()
    setAudio(data.data)
    
}

  const reset = (e) => {
    if (image) setVideo(null);
    if (video) setImage(null);
    if (audio) setAudio(null)
    else setImage(null);
    setVideo(null);
    setAudio(null)
  }; //para que no se envien varias cosas juntas(que puede ser una funcion util de la app mas adelante)

  const handleImage = (e) => {
    const file = e.target.files[0]; ///accedemos a la imagen/video que vamos a subir
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
    buttonHandler(message, image, video,audio);
    setMessage("");
    setVideo(null); //seteamos en null al enviar el video e imagen
    setImage(null);
    setAudio(null)
  };

  const [name, setName] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleLoad = async () => {
    setSpinner(true);
    setTimeout(() => {
      setName("");
      setSpinner(false);
    }, 1800);
  };

  return (
    <div className={style.container}>
      <span className={style.nameFile}>{name}</span>
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
              setName(e.target.files[0].name);
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

          <AudioRecorder 
          onRecordingComplete={(blob)=>transformaraudio(blob)}
          recorderControls={recorderControls}
          />
         {audio&& 
           <div>
            <span style={{color:"white"}}>Audio listo para enviar</span>
            <button  type="button" onClick ={()=>setAudio(null)}>X</button>
          </div>
          }

        <button
          onSubmit={handleLoad}
          onClick={handleLoad}
          className={style.buttonSubmit}
          type="submit"
        >
          {<IoIosSend />}
        </button>

        {name && spinner ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
            marginLeft="10px"
          />
        ) : (
          <span></span>
        )}
      </form>
    </div>
  );
}
