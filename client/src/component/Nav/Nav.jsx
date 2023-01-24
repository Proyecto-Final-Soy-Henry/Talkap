import style from "./Nav.module.css";
import Profile from "../Profile/Profile";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
export default function Nav() {
  return (
    <nav className={style.navContainer}>
      <Profile />
      <LogoutButton />
    </nav>
  );
}
