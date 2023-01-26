import style from "./AboutUs.module.css";
import coso1 from "../../assets/nosotros/1.png";
import coso2 from "../../assets/nosotros/2.png";
import coso3 from "../../assets/nosotros/3.png";
import coso4 from "../../assets/nosotros/4.png";
import coso5 from "../../assets/nosotros/5.png";
import coso6 from "../../assets/nosotros/6.png";

const AboutUs = () => {
  return (
    <div className={style.aboutUsContainer}>
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
        placeat? Accusamus unde, praesentium eius voluptate magni reiciendis
        fugiat quod! Dicta quisquam perferendis, debitis, saepe voluptatem natus
        animi rerum quasi numquam aperiam nostrum molestiae magni accusantium
        nihil reprehenderit ullam?
      </p>

      <div className={style.cardsContainer}>
        <div className={`${style.cardAle} ${style.card}`}>
          <img src={coso1} />
          <h3>Ale</h3>
        </div>
        <div className={`${style.cardJoa} ${style.card}`}>
          <img src={coso2} />
          <h3>Joa</h3>
        </div>
        <div className={`${style.cardJoaquin} ${style.card}`}>
          <img src={coso3} />
          <h3>Joaquin</h3>
        </div>
        <div className={`${style.cardRenzo} ${style.card}`}>
          <img src={coso4} />
          <h3>Renzo</h3>
        </div>
        <div className={`${style.cardVane} ${style.card}`}>
          <img src={coso5} />
          <h3>Vane</h3>
        </div>
        <div className={`${style.cardNacho} ${style.card}`}>
          <img src={coso6} />
          <h3>Nacho</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
