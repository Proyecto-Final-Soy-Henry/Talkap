export default function  ChatRender({menssages}){
    return (<div className="chat-render">
        {menssages?.map(msj=>{
           
          return <>
          <p>{msj.user}</p>
          <p>{msj.message}</p>
          </>
           
            
        })}

    </div>);
}