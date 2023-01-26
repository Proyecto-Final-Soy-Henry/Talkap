import './UserCard.css'
export default function UserCard({user,handle}){
    let name1 = user.name
    if(user.name.includes("@")){
        let newName =[]
        for(let i = 0; user.name[i] !== "@"; i++){
            newName.push(user.name[i])   
        }   
        name1 = newName.join("")}
  
    return (<div key={name1} className="user-card">
        <img onClick={()=>{handle(user)}} className='img' src={user.picture} alt={name1}/>
        <p>{user.connected?'✅ ':'⛔ '}{name1}</p>
        
    </div>);
}
