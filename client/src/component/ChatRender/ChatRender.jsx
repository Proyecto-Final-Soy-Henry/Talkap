import './ChatRender.css'
export default function  ChatRender({menssages}){

    return (<div className="chat-render">
        {menssages?.map((msj,index)=>{
           
          return <div key={index}>
                  <p>{msj.user} : {msj.message}</p>
                  <br/>
          </div>
    
          
           
            
        })}

    </div>);
}