import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import style from './BlackList.module.css'
export default function BlackList (){

  const {my} = useSelector(state=>state.users);
  const navigate  = useNavigate()
  useEffect(()=>{
    if(!my.blacklist){
        navigate('/')
    }
  },[my.blacklist,navigate])
    return (<div className={style.blacklist}>
        <div className={style.title} > CUENTA BLOQUEADA INDEFINIDAMENTE </div>
        <img alt='imagen de bloqueo' src='https://i.postimg.cc/fR7PJf9h/ban.png'/>
        
        <div className={style.subtitle}>Se le ha enviado un e-mail a su casilla de correo con los motivos del mismo.</div>
        <div className={style.subtitle}>Póngase en contacto con el administrador para obtener más información</div>
    </div>)
}