import style from './Nav.module.css';
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
export default function Nav (){

    return(<div className={style.nav}>
 
        <LogoutButton />
       
    </div>);
}