import style from "./Modal.module.css";
import { useSelector } from "react-redux";
import Card from "./Card";
import { sendMessage } from "../../services/sockets";
export default function Modal({ setModal }) {
  const { list } = useSelector((state) => state.users);

  return (
    <>
      <button
        className={style.buttonExit}
        onClick={() => {
          setModal(false);
        }}
      >
        Cerrar
      </button>
      <div className={style.modal}>
        {list
          .filter((e) => e.type === "user")
          .map((e) => {
            return (
              <Card
                user={e}
                handle={() => {
                  sendMessage("blacklist", e.email);
                }}
              />
            );
          })}
      </div>
    </>
  );
}
