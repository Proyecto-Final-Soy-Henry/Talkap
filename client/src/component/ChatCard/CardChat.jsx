import style from './ChatCard.module.css'
export default function ChatCard({picture,email}){

    //////////////////////Trasforma Emaill en un Name//////////////////////
    let name1 = ""
    let newName =[]
    for(let i = 0; email[i] !== "@"; i++){
        newName.push(email[i])   
    }   
    name1 = newName.join("")
    //////////////////////////////////////////////////////////////////////
    return(<div className={style.chatcard}>
        
        <img alt={email} src={picture}/>
        <p>{name1.toUpperCase()}</p>
        
    </div>)
}