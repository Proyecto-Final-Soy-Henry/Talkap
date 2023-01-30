import { useSelector } from "react-redux";
import "./UserCard.css";
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

  return (
    <div key={name1} className="user-card">
      {!email && (
        <div>
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
      )}
    </div>
  );
}
