import style from "./ChatInput.module.css";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { ImFilePicture } from "react-icons/im";
import {BiErrorCircle} from "react-icons/bi"
import {HiMicrophone} from "react-icons/hi"
import { Spinner } from "@chakra-ui/react";
import {AudioRecorder,useAudioRecorder} from  'react-audio-voice-recorder'/// npm i react-audio-voice-recorder 
import axios from 'axios' 
import swal from 'sweetalert';
import { useSelector } from "react-redux";

export default function ChatInput({ buttonHandler }) {
  const [message, setMessage] = useState("");
  const recorderControls = useAudioRecorder();
  const [image, setImage] = useState(null); //nuevo
  const [video, setVideo] = useState(null); //nuevo
  const [audio, setAudio] = useState(null); //nuevo
  const [span, setSpan] = useState(0);
  let pres = "Escribe un mensaje..."
  const { messages } = useSelector((state) => state.chat);
  const { my } = useSelector((state) => state.users);

  const transformaraudio = async(blob)=>{
    const formData = new FormData();
    formData.append('file', blob);
    
    const data= await axios.post('/audioconverter',formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })        
    
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
    setSpan(span+1)
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

  useEffect(()=>{
    if(messages.length){
      if(messages[messages.length-1].user !== my.email ){
        setSpan(0);
      }}
  },[messages])

  const spans = async () =>{

    setTimeout(() => {
      setSpan(0);
      
    }, 3000);
  }


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
            {span < 7 ?<input
          className={style.inputMessage}
          placeholder={pres}
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />:<>
        <p className={style.span} onClick={()=>{spans()}} >Desbloquear input en unos segundos</p>

        </>}
        

          <AudioRecorder 
          onRecordingComplete={(blob)=>transformaraudio(blob)}
          recorderControls={recorderControls}
          />
         {audio&& 
           <div className={style.audio}>
            <HiMicrophone color="green"/>
            <button  type="button" onClick ={()=>setAudio(null)}>X</button>
          </div>
          }
        {span < 6 ? <button
          onSubmit={handleLoad}
          onClick={handleLoad}
          className={style.buttonSubmit}
          type="submit"
        >
          {<IoIosSend />}
        </button>:
        <><button
        onClick={()=>{
          
          swal("Muchos Mensajes", "el envio de muchos mensajes consecutivos se considera SPAN y esta prohibido en TalkApp. ", "warning", {
            button: "Entiendo",
          });
        }}
        className={style.buttonSubmit}
      >
        {<IoIosSend />}
      </button></>}
       

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

