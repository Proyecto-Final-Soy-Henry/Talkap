import { motion } from "framer-motion";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import style from "./CardDeveloper.module.css";

import HenryLogo from "../../assets/nosotros/LogoHenry.png";

export default function CardDeveloper({
  name,
  img,
  alt,
  facebook,
  gitHub,
  linkedin,
}) {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className={style.card}
    >
      <motion.img
        // whileHover={{ scale: 1, rotate: 360 }}
        whileTap={{
          scale: 0.8,
          rotate: -360,
          borderRadius: "100%",
        }}
        src={img}
        alt={alt}
      />
      <div className={style.nameAndLinksContainer}>
        <h3 className={style.name}>{name}</h3>
        <div className={style.linksContainer}>
          <a className={style.facebook} href="#">
            {<BsFacebook />}
          </a>
          <a className={style.linkedin} href={linkedin} target="_blank">
            {<BsLinkedin />}      
          </a>
          <a className={style.gitHub} href={gitHub} target="_blank">
            {<BsGithub />}
          </a>
        </div>
      </div>
      <motion.img
        drag
        whileDrag={{ scale: 2 }}
        // dragConstraints={{ left: 2, right: 2, bottom: 2, top: 2 }}
        dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
        className={style.logoHenry}
        src={HenryLogo}
        alt="HenryLogo"
      />
    </motion.div>
  );
}
