import style from "./AboutUs.module.css";
import coso1 from "../../assets/nosotros/1.png";
import coso3 from "../../assets/nosotros/3.png";
import coso6 from "../../assets/nosotros/6.png";
import Guido from "../../assets/nosotros/Guido.jpg";
import Renzo from "../../assets/nosotros/Renzo.jpg";
import Nacho from "../../assets/nosotros/Nacho.jfif";
import Joaquin from "../../assets/nosotros/Joaquin.jfif";
import Vanessa from "../../assets/nosotros/Vane.jfif";
import CardDeveloper from "./CardDeveloper";
import { Link } from "react-router-dom";
const DEVELOPERS = [
  {
    name: "Joaquin",
    img: Joaquin,
    facebook: "",
    gitHub: "https://github.com/Wild-Design",
    linkedin: "https://www.linkedin.com/in/joaquin-bustelo-0593a9242/",
  },
  { name: "Renzo", img: Renzo, facebook: "", gitHub: "", linkedin: "" },
  { name: "Nacho", img: Nacho, facebook: "", gitHub: "", linkedin: "" },
  { name: "Guido", img: Guido, facebook: "", gitHub: "", linkedin: "" },
  { name: "Ale", img: coso1, facebook: "", gitHub: "", linkedin: "" },
  { name: "Vannesa", img: Vanessa, facebook: "", gitHub: "", linkedin: "" },
  { name: "Joa", img: coso6, facebook: "", gitHub: "", linkedin: "" },
];
const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer}>
      <div className={style.info}>
        <h3>¿Quienes somos?</h3>
        <Link to="/">
          <p>Volver</p>
        </Link>
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
            <p>Ful Stack Developer</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
