import style from './ChatCard.module.css'
import {AiOutlineHome} from 'react-icons/ai'
import { setAddressee } from '../../store/slices/users';
import { useDispatch } from 'react-redux';

export default function ChatCard({picture,email}){
    const dispatch = useDispatch();
    const handle = (user) => {
        dispatch(setAddressee(user));
      };

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
        <div className={style.div}>
        <AiOutlineHome onClick={()=>{handle()}} size="22px" ></AiOutlineHome>
        </div>
        
        
        
    </div>)
}