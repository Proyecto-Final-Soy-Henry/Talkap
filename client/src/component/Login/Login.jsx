import style from "./Login.module.css";
import LoginButton from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Login() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={style.login}>
      {!isAuthenticated && (
        <>
          <h1>Bienvenidos !</h1>
          <h1>Inicia sesión porfavor</h1>
          <LoginButton />
        </>
      )}
    </div>
  );
}
