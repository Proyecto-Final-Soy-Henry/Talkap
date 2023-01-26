import "./SalaCard.css"
import { DeleteIcon ,EmailIcon} from '@chakra-ui/icons'
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function SalaCard (props){
 const [notif,setNotif] = useState(false)
 const {my} =  useSelector(state=>state.users)
 
  let lastMessage = ""

 if(props.message[0] !== undefined){
  lastMessage = props.message[0].message
  console.log(props.message[0])
 }
useEffect(()=>{
  if(props.message[0].user !== my.email){
    setNotif(true)
  }
  
},[lastMessage])


    return(

        <div class="card" onClick={()=>{
        props.handle(props.user);
       return setNotif(false)
        }}>
        <div class="img">
            <img src={props.user.picture}></img>
        </div>
        <div class="textBox">
          <div class="textContent">
            <p class="h1">{props.user.name}</p>
            
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