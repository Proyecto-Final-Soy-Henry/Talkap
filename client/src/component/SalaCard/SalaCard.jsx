import "./SalaCard.css"
import { EmailIcon} from '@chakra-ui/icons'
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function SalaCard (props){
 const [notif,setNotif] = useState(false)
 const [newN,setNewN] = useState({message:null,see:false,email:null})


 const {my} =  useSelector(state=>state.users)
 const {addressee} = useSelector(state=>state.users)


  let img 
  let text 
  let point = "punto"
  let lastMessage = ""
  let name1 = props.user.name

 if(props.message[0] !== undefined){
  lastMessage = props.message[0].message
 
 }
useEffect(()=>{




  if(lastMessage==newN.message && props.message[0].user == newN.email&&props.message[0].id ===newN.msgId){setNotif(false)}else{
  if(addressee){
    if( props.message[0].user !== my.email && addressee.email !== props.message[0].user){
          
      if(addressee.email === "group@talkap" && props.message[0].receiver === "group@talkap"){  setNotif(false)

      }else setNotif(true)

    }else{ 
     if(props.message[0].receiver === "group@talkap" && props.message[0].user === addressee.email){
      setNotif(true)
     }else setNotif(false)
     }
  }else if(props.message[0].user !== my.email){
    setNotif(true)
  }else setNotif(false)
}
  
},[lastMessage,my.email,props.message,addressee])

if(props.user.connected){
  if(props.user.email !=="group@talkap"){
    img = "imgA"
    text = "textBoxA"
    point = "puntoA"
  }else {
    img = "imgG"
    text="textG"
  }

}else{
  if(props.user.email !=="group@talkap"){
    img = "img"
    text = "textBox"
    point = "punto"
  }
}

if(props.user.name.includes("@")){
  let newName =[]
  for(let i = 0; props.user.name[i] !== "@"; i++){
      newName.push(props.user.name[i])   
  }   
  name1 = newName.join("")}

    return(

        <div className="card" onClick={()=>{
          setNotif(false)
          setNewN({message:lastMessage,see:true,email:props.message[0].user,msgId:props.message[0].id})
         
       return  props.handle(props.user);
        }}>
        <div className={img}>
            <img alt="IMG" src={props.user.picture}></img>
        </div>

        <div className={text}>
          <div className="textContent">
            <p className="h1">{name1}</p>
            
          </div>
          {
          lastMessage.length > 25 ?<span className="span2" >Nuevo Mensaje...</span>:<span className="span">{lastMessage}</span>
          }
          
          <div className="remove">
            {notif && <EmailIcon  display="flex"  color= "#70e000" _hover={{color: "#007200"}}></EmailIcon>}
          </div>
        </div>

       </div>    
    );
}
