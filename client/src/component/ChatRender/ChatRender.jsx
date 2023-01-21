import './ChatRender.css'
export default function  ChatRender({menssages}){

    return (<div className="chat-render">
        {menssages?.map((msj,index)=>{
             
            //codigo para refactoriar
            //cambia mi name en caso de ser un email
            
            let  name1=msj.user;
             if(msj.user.includes("@")){
              let newName =[]
              for(let i = 0; msj.user[i] !== "@"; i++){
                  newName.push(msj.user[i])   
              }   
              name1 = newName.join("")}

              
          return <div key={index}>
                  <p>{name1} : {msj.message}</p>
                  <p>para:{msj.receives}</p>
                  <br/>
          </div>
    
          
           
            
        })}

    </div>);
}