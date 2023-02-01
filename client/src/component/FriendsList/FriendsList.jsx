import style from "./FriendsList.module.css";
import {useSelector } from "react-redux";
import {useState } from "react";
import { Box } from "@chakra-ui/react";
import StylingFriendsList from "./StylingFriendsList.jsx";
const FriendsList = () => {
  const [input, setInput] = useState();
  let friendsTotal =[]
  const {my} = useSelector((state) => state.users);
  if(my.friends){
    friendsTotal = JSON.parse(my.friends)
  }
  

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
            ? friendsTotal
                .filter((user) => {
                  let searchUser = input.toUpperCase();

                  return (
                    searchUser && user.name.toUpperCase().startsWith(searchUser)
                  );
                })
                .map((user) => (
                  <div key={user.id} id={user.name}>
                    <StylingFriendsList
                      user={user}
                      handle={() => {
                        console.log("click");
                      }}
                    />
                  </div>
                ))
            : friendsTotal? 
            friendsTotal.map((user) => {
                return (
                  <Box key={user.email}>
                    <StylingFriendsList
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
