import style from "./FriendsList.module.css";
import {useSelector } from "react-redux";
import {useState } from "react";
import StylingUserList from "../UserList/StylingUserList.jsx";
import { Box } from "@chakra-ui/react";
const FriendsList = () => {
  const [input, setInput] = useState();

  const {friends} = useSelector((state) => state.users);


  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className={style.userList}>
      <form>
        <input
          onChange={handleInput}
          value={input}
          type="search"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div>
        <div>
          {input
            ? friends
                .filter((user) => {
                  let searchUser = input.toUpperCase();

                  return (
                    searchUser && user.name.toUpperCase().startsWith(searchUser)
                  );
                })
                .map((user) => (
                  <div key={user.id} id={user.name}>
                    <StylingUserList
                      user={user}
                      handle={() => {
                        console.log("click");
                      }}
                    />
                  </div>
                ))
            : friends? 
              friends.map((user) => {
                return (
                  <Box key={user.email}>
                    <StylingUserList
                      user={user}
                      handle={() => {
                        console.log("click");
                      }}
                    />
                  </Box>
                );
              })
              : console.log("no amigos")
              }
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
