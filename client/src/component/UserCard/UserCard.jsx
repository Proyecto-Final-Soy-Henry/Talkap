import './UserCard.css'
export default function UserCard({user,handle}){
    return (<div key={user.name} className="user-card">
        <img onClick={()=>{handle(user)}} className='img' src={user.picture} alt={user.name}/>
        <p>{user.connected?'✅ ':'⛔ '}{user.name}</p>
        
    </div>);
}