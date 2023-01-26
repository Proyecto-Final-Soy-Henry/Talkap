import style from "./Nav.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import Profile from '../Profile/Profile.jsx'
export default function Nav (){

    return(<div className={style.navContainer}>
        <Profile />
        
        <LogoutButton />
       
    </div>);
}
