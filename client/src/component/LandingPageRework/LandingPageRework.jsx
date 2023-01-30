import style from './LandingPageRework.module.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import FotoLanding from "../../assets/ImagenLanding.png"

import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Landing() {

    const { loginWithRedirect } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className={style.body}>
            <header className={style.header}>
                <nav className={style.nav}>
                    <div className={style.enlaces} id="enlaces">
                        <p className={style.links} onClick={() => loginWithRedirect()}>Login</p>
                        <p className={style.links} onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Registrarse</p>
                        <p className={style.links}>FAQ</p>
                    </div>
                </nav>

                <div className={style.container}>
                    <div className={style.texto}>
                        <h1>Talkap</h1>
                        <h2>¿Porqué elegir Talkap?</h2>
                        <Link to="/aboutUs"> <p className={style.links}>Sobre Nosotros</p></Link>
                    </div>
                    <img src={FotoLanding} alt="" className={style.img} />
                </div>
                <img className={style.logo} src={logo} alt="" />
            </header>
        </div>
    )
}