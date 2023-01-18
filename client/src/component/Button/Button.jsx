import style from "./Button.module.css";
export default function Button({ texto, buttonHandler }) {
  return (
    <div
      className={style.button}
      onClick={() => {
        buttonHandler(texto);
      }}
    >
      <h3 className="texto">{texto}</h3>
    </div>
  );
}
