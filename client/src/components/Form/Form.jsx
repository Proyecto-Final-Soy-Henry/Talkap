import style from "./Form.module.css";
import { useState } from "react";
import swal from "sweetalert";
const Form = () => {
  //Estados Locales
  const [form, setForm] = useState({
    user: "",
    password: "",
  });
  //Handlers
  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginOk(form) ? swal(msjOk) : swal(msjNegative);
  };
  //Messajes de alerta utilizando sweetalert
  const msjOk = {
    title: "successful",
    text: "Inicio de sesión ",
    icon: "success",
    button: "ok",
  };
  const msjNegative = {
    icon: "error",
    title: "Oops...",
    text: "Datos incorrectos",
  };
  //Funciones
  //Devuelve un booleano si es correcto o no el Login
  const loginOk = (form) => {
    const datos = {
      user: "alejandro",
      password: "123456",
    };
    return JSON.stringify(datos) === JSON.stringify(form);
  };
  // funcion para las cookies
  // const createCookies = (data)=>{
  //     cookies.set('user',data.user,{path:'/',sameSite:"none",secure:true})
  //     cookies.set('password',data.password,{path:'/',sameSite:"none",secure:true})
  // }
  //retorno del componente
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          name="user"
          id="user"
          onChange={handleForm}
          value={form.user}
        />
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleForm}
          value={form.password}
        />
        <br />
        <button type="submit" name="submit" className={style.submit}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Form;
