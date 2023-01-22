import style from './ChatCard.module.css'
export default function ChatCard({picture,email}){
    return(<div className={style.chatcard}>
        <img alt={email} src={picture}/>
        <p>{email}</p>
    </div>)
}