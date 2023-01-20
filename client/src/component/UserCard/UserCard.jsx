export default function UserCard({name,picture}){
    return (<div className="user-card">
        <img src={picture} alt={name}/>
        <p>{name}</p>
    </div>);
}