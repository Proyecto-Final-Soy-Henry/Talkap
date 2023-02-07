import style from "./FriendsList.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import StylingFriendsList from "./StylingFriendsList.jsx";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
const FriendsList = () => {
  const [input, setInput] = useState();
  let friendsTotal = [];
  const { my } = useSelector((state) => state.users);
  if (my.friends) {
    friendsTotal = JSON.parse(my.friends);
  }

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <div className={style.userList}>
      <form>
        <InputGroup>
          <Input
            color="white"
            placeholder="Buscar..."
            onChange={handleInput}
            value={input}
            type="search"
            focusBorderColor="#FF4e5b"
            style={{ caretColor: "white" }}
          />

          <InputRightElement children={<FaSearch color="#FF4e5b" />} />
        </InputGroup>
      </form>
      <div>
        <div className={style.users}>
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
            : friendsTotal
            ? friendsTotal.map((user) => {
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
            : console.log("no amigos")}
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
