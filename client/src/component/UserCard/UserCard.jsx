import './UserCard.css'
export default function UserCard({name,picture,connected}){
    return (<div key={name} className="user-card">
        <img className='img' src={picture} alt={name}/>
        <p>{connected?'✅ ':'⛔ '}{name}</p>
        
    </div>);
}