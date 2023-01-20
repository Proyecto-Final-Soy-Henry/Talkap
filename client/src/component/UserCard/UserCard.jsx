import './UserCard.css'
export default function UserCard({name,picture}){
    return (<div key={name} className="user-card">
        <img className='img' src={picture} alt={name}/>
        <p>{name}</p>
    </div>);
}