import "./ChatsList.css";
import { useSelector } from "react-redux";

import { setAddressee } from "../../store/slices/users/index.js";
import { useDispatch } from "react-redux";
import SalaCard from "../SalaCard/SalaCard";
export default function ChatsList() {
  const dispatch = useDispatch();
  const handle = (user) => {
    dispatch(setAddressee(user));
  };

  const { messages } = useSelector((state) => state.chat);
  const { list, my } = useSelector((state) => state.users);
  // obtengo la lista de  los usuarios que me mandaron mensajes
  let listUser = [];

  messages.forEach((msj) => {
    //consulto si ya tengo ese usuario en mi lista
    if (
      !listUser.some((user) => user.email === msj.user) &&
      msj.user !== my.email &&
      msj.receiver !== "group@talkap"
    ) {
      // si no lo tengo lo busco en el array de users, y lo pusheo
      list.forEach((e) => {
        if (e.email === msj.user) {
          listUser.push(e);
        }
      });

      //consulto si ya tengo ese usuario en mi lista
    } else if (
      !listUser.some((user) => user.email === msj.receiver) &&
      msj.receiver !== my.email
    ) {
      // si no lo tengo lo busco en el array de users, y lo pusheo
      list.forEach((e) => {
        if (e.email === msj.receiver) {
          listUser.push(e);
        }
      });
    }
  });
  
  let bans = []

  if(my.banned){
   bans = JSON.parse(my.banned)
  }


  const banFilter = listUser.filter((e)=>{

    if(bans){return !bans.some((el)=>{
      return el === e.email
    })}else return true
    
    
  })

  return (
    <div className="userListContainer">
      {banFilter?.map((user, index) => {
        const message = messages.filter((msj) => {
          // msj.user !== my.email ? noti = true : noti = false

          return (
            msj.receiver === user.email ||
            (msj.user === user.email && msj.receiver !== "group@talkap")
          );
        });
        //

        let lastMessage = [];

        lastMessage.push(message[message.length - 1]);

     
        return (
          <SalaCard
            key={index}
            user={user}
            handle={handle}
            message={lastMessage}
          />
        );
      })}
    </div>
  );
}
