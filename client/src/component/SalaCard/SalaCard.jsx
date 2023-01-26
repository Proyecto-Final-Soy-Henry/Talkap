import "./SalaCard.css"
import { DeleteIcon } from '@chakra-ui/icons'

export default function SalaCard (props){
  let lastMessage = "NaN"
 if(props.message[0] !== undefined){
  lastMessage = props.message[0].message
 }

// if(lastMessage.length >25){
//  let arr = lastMessage.split("")
//  console.log(arr)
// }

    return(

        <div class="card" onClick={()=>{props.handle(props.user)}}>
        <div class="img">
            <img src={props.user.picture}></img>
        </div>
        <div class="textBox">
          <div class="textContent">
            <p class="h1">{props.user.name}</p>
            <span class="span"></span>
          </div>
          {lastMessage.length > 20 ?<span class="span2" >Nuevos Mensajes...</span>:<span class="span">{lastMessage}</span>
          }
          
          <div className="remove">
          <DeleteIcon  display="flex" _hover={{color: "#e5383b"}} ></DeleteIcon>
          </div>
         
        <div>
      </div></div></div>    
    );
}