import style from "./Login.module.css";
import LoginButton from "../LoginButton/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./LogoTransparent.png";
import { motion } from "framer-motion";

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
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatDelay: 1,
        }}
        className={motion.img}
      >
        <img src={Logo} alt="Logo" />
      </motion.div>
    </div>
  );
}
