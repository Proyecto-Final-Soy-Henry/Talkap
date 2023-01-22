export default function ChatCard({picture,email}){
    return(<div className="chat-card">
        <img alt={email} src={picture}/>
        <p>{email}</p>
    </div>)
}