import style from './LogoGiratorio.module.css'
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";
export default function LogoGiratorio(){
    return(<div className={style.Logo}>
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
    </div>);
}