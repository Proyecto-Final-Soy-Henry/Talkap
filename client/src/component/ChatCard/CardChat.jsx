import style from './ChatCard.module.css'
import { AiOutlineHome } from 'react-icons/ai'
import { setAddressee } from '../../store/slices/users';
import { useDispatch } from 'react-redux';

export default function ChatCard({ picture, email,name }) {
    const dispatch = useDispatch();

    const handle = (user) => {
        dispatch(setAddressee(user));
    };

    //////////////////////Trasforma Emaill en un Name//////////////////////

    let name1 = name

    if (name1.includes("@")) {
      let newName = [];
      for (let i = 0; name1[i] !== "@"; i++) {
        newName.push(name1[i]);
      }
      name1 = newName.join("");
    }
    //////////////////////////////////////////////////////////////////////
    return (
        <div className={style.chatcard}>
            <div className={style.container}>
            <img alt={email} src={picture} />
            <p>{name1.toUpperCase()}</p>
            <div className={style.home}>
                <AiOutlineHome onClick={() => { handle() }} size="40px" ></AiOutlineHome>
            </div>
            </div>
        </div>
    )
}
