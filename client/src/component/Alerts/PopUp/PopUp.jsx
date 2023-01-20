import React from "react";
import style from "./PopUp.module.css";
import { motion } from "framer-motion";

const PopUp = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
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
      className={style.popUpContainer}
    >
      <h4 className={style.title}>{props.titulo}</h4>
      <div className={style.buttonsContainer}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={style.button}
          onClick={props.confirm}
        >
          si
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={style.button}
          onClick={props.close}
        >
          Aun no
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PopUp;
