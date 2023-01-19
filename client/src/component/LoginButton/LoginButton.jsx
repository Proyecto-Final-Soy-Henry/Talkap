import style from "./LoginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className={style.LoginButton}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </motion.button>
  );
};

export default LoginButton;
