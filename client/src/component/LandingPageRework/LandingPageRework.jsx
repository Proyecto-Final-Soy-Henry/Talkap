import style from "./LandingPageRework.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import FotoLanding from "../../assets/ImagenLanding.png";

import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className={style.body}>
      {isLoading && (
        <div className={style.loader}>
          <Loader />
        </div>
      )}
      {
        <header className={style.header}>
          <nav className={style.nav}>
            <div className={style.enlaces} id="enlaces">
              <p className={style.links} onClick={() => loginWithRedirect()}>
                Login
              </p>
              <Link to="/faq">
                <p className={style.links}>FAQ</p>
              </Link>
            </div>
          </nav>
          <div className={style.divRegistrarse}>
            <button
              className={style.registrarse}
              onClick={() => loginWithRedirect({ screen_hint: "signup" })}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Registrarse
            </button>
          </div>
          <div className={style.container}>
            <div className={style.texto}>
              <h1>Talkap</h1>
              <h2>¿Porqué elegir Talkap?</h2>
              <h4 className={style.textoFooter}>
                Te ofrecemos un aplicacion de mensajeria segura donde podras
                conocer gente nueva y hacer amigos
              </h4>
            </div>
            <img src={FotoLanding} alt="" className={style.img} />
          </div>
          <img className={style.logo} src={logo} alt="" />
          <div className={style.divNosotros}>
            <Link to="/aboutUs">
              <button className={`${style.sobreNosotros} ${style.registrarse}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span> Sobre Nosotros
              </button>
            </Link>
          </div>
        </header>
      }
    </div>
  );
}
