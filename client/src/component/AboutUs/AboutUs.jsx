import style from "./AboutUs.module.css";
import Guido from "../../assets/nosotros/Guido.jpg";
import Renzo from "../../assets/nosotros/Renzo.jpg";
import Nacho from "../../assets/nosotros/Nacho.jfif";
import Joaquin from "../../assets/nosotros/Joaquin.jfif";
import Vanessa from "../../assets/nosotros/Vane.jfif";
import Ale from "../../assets/nosotros/Ale.jpg";
import Joaco from "../../assets/nosotros/Joaco.jfif";
import CardDeveloper from "./CardDeveloper";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
const DEVELOPERS = [
  {
    name: "Joaquin",
    img: Joaquin,
    facebook: "",
    gitHub: "https://github.com/Wild-Design",
    linkedin: "https://www.linkedin.com/in/joaquin-bustelo-0593a9242/", 
  },
  { name: "Renzo", img: Renzo, facebook: "", gitHub: "https://github.com/RenzoDoratto", linkedin: "https://www.linkedin.com/in/renzo-doratto-rodriguez-77528b195/" },
  { name: "Nacho", img: Nacho, facebook: "", gitHub: "https://github.com/nacho337", linkedin: "https://www.linkedin.com/in/ignacio-rossatti-47b60522a/" },
  { name: "Guido", img: Guido, facebook: "", gitHub: "https://github.com/GuidoGattini", linkedin: "https://www.linkedin.com/in/guido-gattini-54778125b/" },
  { name: "Ale", img: Ale, facebook: "", gitHub: "https://github.com/rgcandia", linkedin: "https://www.linkedin.com/in/ale-gonzalez-candia-4a7ab2230/" },
  { name: "Vannesa", img: Vanessa, facebook: "", gitHub: "https://github.com/VanessaRiosm", linkedin: "https://www.linkedin.com/in/vanessa-rios-3b520a1a8/" },
  { name: "Joaco", img: Joaco, facebook: "", gitHub: "https://github.com/joaxd69", linkedin: "https://www.linkedin.com/in/joaquin-garcia-392a9a259/" },
];
const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer}>
      <Link to="/">
        <motion.span animate={{ scale: 1.5 }} initial={{ scale: 1 }}>
          <IoMdArrowRoundBack />  
        </motion.span>
      </Link>

      <div className={style.info}>
        <h3>¿Quienes somos?</h3>
        <p>
          Somos un equipo de amigos y compañeros del bootcamp "Soy Henry"
          apasionados por la tecnología y la comunicación, unidos para ofrecer
          una experiencia de chat innovadora y divertida a nuestros usuarios.
        </p>
      </div>

      <div className={style.cardsContainer}>
        {DEVELOPERS.map((developer) => (
          <div className={style.dualCard}>
            <CardDeveloper
              name={developer.name}
              img={developer.img}
              alt={developer.name}
              gitHub={developer.gitHub}
              linkedin={developer.linkedin}
            />
            {/* <p>Ful Stack Developer</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;











