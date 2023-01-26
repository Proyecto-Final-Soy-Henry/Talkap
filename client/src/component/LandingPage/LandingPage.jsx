import style from "./Landing.module.css";
// import image1 from'../../assets/image3.jpg'
import logo from "../../assets/Logo.png";
import menu from "../../assets/menu2.jpg";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import createAuth0Client from "@auth0/auth0-spa-js";
const Auth0Client = createAuth0Client({
  domain: "YOUR_AUTH0_DOMAIN",
  client_id: "YOUR_CLIENT_ID",
});
console.log(Auth0Client);

export default function Landing() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { getAccessTokenSilently } = useAuth0(); //Aca esta el token

  const getToken = async () => {
    //Guardo el Token en localStorage
    try {
      const accessToken = await getAccessTokenSilently();
      localStorage.setItem("token", accessToken);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      getToken();
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={style.containerContainer}>
      <div className={style.container}>
        <nav className={style.nav}>
          <img className={style.logo} src={logo} alt="" />
          <input type="checkbox" className={style.check} id="check" />
          <label htmlFor="check" className={style.checkboton}>
            <img src={menu} className={style.menu} alt="" />
          </label>
          <ul>
            <li className={style.li} onClick={() => loginWithRedirect()}>
              Login
            </li>

            <li
              className={style.li}
              onClick={() => loginWithRedirect({ screen_hint: "signup" })}
            >
              Registrate
            </li>
            <li className={style.li}>Sobre nosotros</li>
            <li className={style.li}>Preguntas y respuestas</li>
          </ul>
        </nav>

        <div className={style.Aboutcontainer}>
          <div style={{ color: "black" }}>
            <h1>¿Por que elegir Talkap?</h1>
            <p>
              *Te ofrecemos un aplicacion de mensajeria segura, <br />
              donde podras conocer gente nueva y hacer amigos. <br />
              *Invita y agrega amigos de cualquier parte del mundo.
              <br />
            </p>
            <p>
              *Envia y recibe mensajes,fotos , y videos de forma instantanea.{" "}
            </p>
          </div>
          {/* <img className={style.image1} src={image1} alt="" /> */}
          {/* <span className={style.spanabout}>
Conocer a amigos nuevos no siempre es fácil. Bien sea por falta de tiempo,
por miedo a sociabilizar de manera directa… pero gracias a las nuevas tecnologías,
hacer amigos es más fácil.
Para ayudarte a encontrar amigos, te invito a conocer la mejor app del momento.
</span> */}
        </div>

        <div className={style.secondblok}></div>
        <div className={style.Footercontainer}>
          <div className={style.footers}>
            <span>Sobre nosotros</span>
          </div>
          <div className={style.footers}>
            <span>Contactanos</span>
          </div>
          <span>Copyright 2023 todos los derechos reservados TALKAP </span>
          <img
            className={style.logofooter}
            src={logo}
            alt=""
            width="50"
            height="50"
          />
        </div>
      </div>
    </div>
  );
}
