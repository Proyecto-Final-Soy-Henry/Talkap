import style from "./Nav.module.css";
import Button from "../Button/Button.jsx";
const Nav = () => {
  const buttonHandler = () => {};
  return (
    <div className={style.navContainer}>
      <Button texto="Login" buttonHandler={buttonHandler} />
      <h1>Bienvenido</h1>
    </div>
  );
};

export default Nav;
