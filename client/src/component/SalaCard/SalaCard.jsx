import "./SalaCard.css"
import { EmailIcon} from '@chakra-ui/icons'
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function SalaCard (props){
 const [notif,setNotif] = useState(false)


 const {my} =  useSelector(state=>state.users)
  let img = "img"
  let text = "textBox"
  let point = "punto"
  let lastMessage = ""
  let name1 = props.user.name

 if(props.message[0] !== undefined){
  lastMessage = props.message[0].message
 
 }
useEffect(()=>{
  if( props.message[0].user !== my.email){
    setNotif(true)
   
  }
  
},[lastMessage,my.email])

if(props.user.connected){
 img = "imgA"
 text = "textBoxA"
 point = "puntoA"
}
if(props.user.name.includes("@")){
  let newName =[]
  for(let i = 0; props.user.name[i] !== "@"; i++){
      newName.push(props.user.name[i])   
  }   
  name1 = newName.join("")}

    return(

        <div class="card" onClick={()=>{
        props.handle(props.user);
       return setNotif(false)
        }}>
        <div class={img}>
            <img alt={name1} src={props.user.picture}></img>
        </div>
        <div class={text}>
          <div class="textContent">
            <p class="h1">{name1}</p>
            <span className={point}>•</span>
          </div>
          {lastMessage.length > 25 ?<span class="span2" >Nuevos Mensajes...</span>:<span class="span">{lastMessage}</span>
          }
          
          <div className="remove">
            {notif&&<EmailIcon  display="flex"  color= "#70e000" _hover={{color: "#007200"}}></EmailIcon>}
          
          </div>
         
        <div>
      </div></div></div>    
    );
}