import { useSelector } from "react-redux";
import "./UserCard.css";

import {MdOutlineDangerous} from 'react-icons/md'
export default function UserCard({ user, handle }) {
  const { my } = useSelector((state) => state.users);

  let name1 = user.name;
  let conne = "disconnec";
  let email = user.email === my.email;
  if (user.name.includes("@")) {
    let newName = [];
    for (let i = 0; user.name[i] !== "@"; i++) {
      newName.push(user.name[i]);
    }
    name1 = newName.join("");
  }
  if (user.connected) {
    conne = "connec";
  }

  let bans = []
  let banned = []
    if(my.banned){
     bans = JSON.parse(my.banned)
    }

  banned = bans.filter((e)=>{
    return e === user.email
  })
      
     
 


  return (
    <div key={name1} className="user-card">

      {banned && banned[0] === user.email ?<div className="banned">
          {" "}
          
          <img
            onClick={() => {
              handle(user);
            }}
            className={conne}
            src={user.picture}
            alt={name1}
          />
          
          <p>{name1}</p>
          <MdOutlineDangerous size="15px" color="red"></MdOutlineDangerous>
          
        </div>:(!email && (
        <div className="user-card">
          {" "}
          <img
            onClick={() => {
              handle(user);
            }}
            className={conne}
            src={user.picture}
            alt={name1}
          />
          <p>{name1}</p>
        </div>
      ))}
      {}
    </div>
  );
}
