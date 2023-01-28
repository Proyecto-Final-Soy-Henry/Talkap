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