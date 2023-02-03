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
                    </div>
                    <img src={friendsImage} alt="" className={style.img1} />
                </div>
                <div className={style.divDonacion}>
                    <div className={style.donacionLeft}>
                    <h2 className={style.title}>DONACIÓN</h2>
                    <a href="https://donate.stripe.com/test_fZe5ngfl58xxaWc3cc">
                    <button className={style.donationButton}>Hacé tu donación</button>
                    </a>
                    </div>
                    <img src={donationImage} alt="" className={style.img2} />
                </div>
            </div>
        </div>
     )
}