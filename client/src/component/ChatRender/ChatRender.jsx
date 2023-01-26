import { useSelector } from 'react-redux';
import './ChatRender.css'



export default function  ChatRender({menssages}){
    
    const { my } = useSelector((state) => state.users);
    const {list} = useSelector((state) =>state.chat)
    return (<div className="chat-render">
        {menssages?.map((msj,index)=>{
        if(!msj.message){return
        }else{
             if(my.email== msj.user)
            console.log(msj.email)
            let name1=msj.user;
             if(msj.user.includes("@")){
              let newName =[]
              for(let i = 0; msj.user[i] !== "@"; i++){
                  newName.push(msj.user[i])   
              }   
              name1 = newName.join("")}
              // console.log(my.email,name1,msj.user)
              if(my.email == msj.user || name1 == my.email ){
            
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