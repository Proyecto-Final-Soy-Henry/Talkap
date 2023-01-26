import style from "./AboutUs.module.css";
import coso1 from "../../assets/nosotros/1.png";
import coso2 from "../../assets/nosotros/2.png";
import coso3 from "../../assets/nosotros/3.png";
import coso4 from "../../assets/nosotros/4.png";
import coso5 from "../../assets/nosotros/5.png";
import coso6 from "../../assets/nosotros/6.png";
import { motion } from "framer-motion";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.info}>
        <h3>¿Quienes somos?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque
          recusandae aliquam? Modi tempore officiis pariatur ipsum quos esse
          voluptate reiciendis reprehenderit doloremque excepturi repellat
          deserunt accusantium sed vero nostrum animi in, eos distinctio
          dignissimos eligendi itaque quo odio quidem? Ex sint ducimus harum et
          nobis praesentium omnis consequuntur dolorum ullam ipsam. Unde eius
          accusantium ratione quidem aut, soluta modi illum, dolor inventore
          deserunt ex asperiores distinctio quam explicabo minus reprehenderit
          placeat?
        </p>
      </div>

      <div className={style.cardsContainer}>
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
          className={`${style.cardAle} ${style.card}`}
        >
          <img src={coso1} />
          <div className={style.nameAndLinksContainer}>
            <h3>Ale</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardJoa} ${style.card}`}
        >
          <img src={coso2} />
          <div className={style.nameAndLinksContainer}>
            <h3>Vanessa</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardJoaquin} ${style.card}`}
        >
          <img src={coso3} />
          <div className={style.nameAndLinksContainer}>
            <h3>Joaquin</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardRenzo} ${style.card}`}
        >
          <img src={coso4} />
          <div className={style.nameAndLinksContainer}>
            <h3>Guido</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardVane} ${style.card}`}
        >
          <img src={coso5} />
          <div className={style.nameAndLinksContainer}>
            <h3>Joa</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardNacho} ${style.card}`}
        >
          <img src={coso6} />
          <div className={style.nameAndLinksContainer}>
            <h3>Renzo</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
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
          className={`${style.cardNacho} ${style.card}`}
        >
          <img src={coso6} />
          <div className={style.nameAndLinksContainer}>
            <h3>Nacho</h3>
            <div className={style.linksContainer}>
              <a href="#">{<BsFacebook />}</a>
              <a href="#">{<BsLinkedin />}</a>
              <a href="#">{<BsGithub />}</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
