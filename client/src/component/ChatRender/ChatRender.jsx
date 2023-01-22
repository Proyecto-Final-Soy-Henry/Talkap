import './ChatRender.css'
import { useAuth0 } from "@auth0/auth0-react";


export default function  ChatRender({menssages}){
    const {user} = useAuth0();
    let nameUser = ""
    if(user.email.includes("@")){
        let newName =[]
        for(let i = 0; user.email[i] !== "@"; i++){
            newName.push(user.email[i])   
        }   
        nameUser = newName.join("")}

    return (<div className="chat-render">
        {menssages?.map((msj,index)=>{
        if(!msj.message){return
        }else{
             if(nameUser == msj.user)
            console.log(msj.email)
            let name1=msj.user;
             if(msj.user.includes("@")){
              let newName =[]
              for(let i = 0; msj.user[i] !== "@"; i++){
                  newName.push(msj.user[i])   
              }   
              name1 = newName.join("")}

              if(nameUser == msj.user || name1 == nameUser ){
                return (<div key={index} className="divMenssageMe"> 
                  <p>{msj.message}</p>
                  <br/>
                </div>)}
                return <div key={index} className="divMenssage">
                <label>{name1} : </label>
                <p>{msj.message}</p>
                <br/>
                </div>
  
          }

          
        })}

    </div>);
}