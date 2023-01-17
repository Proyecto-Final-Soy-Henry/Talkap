import style from "./Button.module.css";
const Button = ({ texto, buttonHandler }) => {
  return (
    <div
      className="button"
      onClick={() => {
        buttonHandler(texto);
      }}
    >
      <h3 className="texto">{texto}</h3>
    </div>
  );
};

export default Button;
