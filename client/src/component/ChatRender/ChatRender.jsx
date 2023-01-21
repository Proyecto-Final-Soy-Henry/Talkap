import './ChatRender.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function  ChatRender({menssages}){
    const {user} = useAuth0();
    return (<div className="chat-render">
        {menssages?.map((msj,index)=>{
        if(!msj.message){return
        }else{
             if(user.name == msj.user)
            console.log(msj.email)
            let name1=msj.user;
             if(msj.user.includes("@")){
              let newName =[]
              for(let i = 0; msj.user[i] !== "@"; i++){
                  newName.push(msj.user[i])   
              }   
              name1 = newName.join("")}

              if(user.name == msj.user || name1 == user.name ){
                return (<div key={index} className="divMenssageMe"> 
                  <p>{msj.message}</p>
                  <br/>
                </div>)}
                return <div key={index} className="divMenssage">
                <p>{name1} : {msj.message}</p>
                <br/>
                </div>
  
          }

          
        })}

    </div>);
}