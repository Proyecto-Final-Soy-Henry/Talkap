import style from "./InitialHome.module.css";
import donationImage from "../../assets/donationImage.png"
import friendsImage from "../../assets/friendsImage.png"
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from  'axios'
export default function InitialHome() {

    const { user} = useAuth0();
    const [gracias,setGracias]=useState(false)

    useEffect(()=> {
        const llamado = async()=>{
            const datos =await axios.post('/donador',{user:user.email})
            if(datos.data==='gracias por donar'){
               setGracias(true)

               setTimeout(() => {
                  setGracias(false)
               }, 30000);
            }
        }
        llamado()
        
    }, []); 
    return (
        <div className={style.container}>
            <div className={style.data}>
                <div className={style.divTalkap}>
                    <div className={style.talkapText}>
                    <h1 className={style.talkap}>TALKAP</h1>
                    <h3 className={style.infoTalkap}>Invita y agrega amigos de cualquier parte del mundo</h3>
                    </div>
                    <img src={friendsImage} alt="" className={style.img1} />
                </div>
                {gracias&& <span style={{color:'white'}}>Muchas gracias por tu donacion</span>}

                <div className={style.divDonacion}>
                    <div className={style.donacionLeft}>
                    <h2 className={style.title}>DONACIÓN</h2>
                    
                    <button className={style.donationButton}>
                    <a href="https://donate.stripe.com/test_fZe5ngfl58xxaWc3cc">
                        Hacé tu donación
                    </a>
                    </button>
                    </div>
                    <img src={donationImage} alt="" className={style.img2} />
                </div>
            </div>
        </div>
    )
}

