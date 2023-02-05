import style from "./InitialHome.module.css";
import donationImage from "../../assets/donationImage.png"
import friendsImage from "../../assets/friendsImage.png"

export default function InitialHome() {
    return (
        <div className={style.container}>
            <div className={style.data}>
                <div className={style.divTalkap}>
                    <div className={style.talkapText}>
                        <h1 className={style.talkap}>TALKAP</h1>
                        <h3 className={style.infoTalkap}>Invita y agrega amigos de cualquier parte del mundo</h3>
                        <h3 className={style.infoTalkap}>Puedes enviarle mensaje a cualquier persona</h3>
                        <h3 className={style.infoTalkap}>Así de fácil es hacer amigos con Talkap!</h3>
                    </div>
                    <div className={style.divImg1}>
                        <img src={friendsImage} alt="" className={style.img1} />
                    </div>
                </div>
                <div className={style.divDonacion}>
                    <div className={style.donacionLeft}>
                        <h2 className={style.title}>DONACIÓN</h2>
                        <h3 className={style.donationText}>Tu donación hará posible que más gente encuentre la forma de comunicarse entre sí</h3>
                        <a href="https://donate.stripe.com/test_fZe5ngfl58xxaWc3cc">
                            <button className={style.donationButton}>Hacé tu donacióna</button>
                        </a>
                    </div>
                    <div className={style.divImg2}>
                        <img src={donationImage} alt="" className={style.img2} />
                    </div>
                </div>
            </div>
        </div>
    )
}