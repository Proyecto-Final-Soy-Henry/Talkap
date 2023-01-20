import style from "./Home.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userValidator } from "../../services/validator.js";
import UserList from "../UserList/UserList";
import Profile from "../Profile/Profile";

export default function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      userValidator(user);
      
    }
  }, [isAuthenticated, navigate, user]);

  return (
    <div className={style.home}>
      {user ? (
        <>
          {" "}
          <Profile/>
          <h1>Bienvenido {user.name}</h1>
          <LogoutButton />
          <UserList/>
        </>
      ) : null}
    </div>
  );
}
