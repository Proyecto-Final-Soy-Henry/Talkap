import style from './Landing.module.css'
import image1 from'../../assets/image3.jpg'
import logo from '../../assets/Logo.png'
import menu from '../../assets/menu2.jpg'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Landing(){

    const { loginWithRedirect } = useAuth0();
    const {reg} = useAuth0
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/home");
      }
    }, [isAuthenticated, navigate]);

    return (
        <div className={style.container}>
          
            <nav className={style.nav}>
              <h1 className={style.Title}> TALKAP  </h1>
            <img className={style.logo} src={logo} alt="" />
            <input type="checkbox" className={style.check} id='check' />
             <label htmlFor="check" className={style.checkboton}>
              <img src={menu} className={style.menu} alt="" />
             </label>
             <ul>
                
                <li className={style.li} onClick={() => loginWithRedirect()}>Login</li>
             
                
                <li className={style.li} onClick={() => loginWithRedirect({ screen_hint: 'signup' })} >Registrate</li>
                <li className={style.li}>Sobre nosotros</li>
                <li className={style.li}>Preguntas y respuestas</li>
             </ul>  
            </nav>
            
           <div className={style.Aboutcontainer}>
                <span className={style.spanabout}> 
                Conocer a amigos nuevos no siempre es fácil. Bien sea por falta de tiempo,
                por miedo a sociabilizar de manera directa… pero gracias a las nuevas tecnologías,
                hacer amigos es más fácil. 
                Para ayudarte a encontrar amigos, te invito a conocer la mejor app del momento.
                </span>
            <img className={style.image1} src={image1} alt="" />
           </div >
           <h1>¿Por que elegir Talkap?</h1>
           <div style={{color:'black'}}>
            <p > 
                *Te ofrecemos un aplicacion de mensajeria segura, donde podras conocer gente nueva y hacer amigos.
                Invita y agrega amigos de cualquier parte del mundo. 
            </p>
            <p>*Envia y recibe mensajes,fotos , y videos de forma instantanea. </p>
             <p>*</p>
             <p>otro motivo</p>
             <p>otro motivo</p>
           </div>

           <div className={style.secondblok}>       
           </div>
           <div className={style.Footercontainer}>
               <div className={style.footers}>
                  <span>Sobre nosotros</span>
               </div>
               <div className={style.footers}>
                   <span>Contactanos</span>
               </div>
                <span>Copyright 2023 todos los derechos reservados TALKAP </span>
                <img className={style.logofooter} src={logo} alt="" width='50' height='50' />
           </div>
           
        </div>
    )
}