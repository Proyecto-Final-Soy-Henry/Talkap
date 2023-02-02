import style from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterUsers, setAddressee } from "../../store/slices/users/index";
import { useEffect, useState } from "react";
import StylingUserList from "./StylingUserList";
import { Box, Input, InputGroup, Flex, InputRightElement, Select, Text } from "@chakra-ui/react";
import {FaSearch} from 'react-icons/fa'
import UserCard from "../UserCard/UserCard";
const UserList = () => {
  const [input, setInput] = useState();

  const { listCopy, list } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(filterUsers(event.target.value));
  };

  function handleInput(e) {
    e.preventDefault();
    setInput(e.target.value);
  }
  const handle = (user) => {
    dispatch(setAddressee(user));
  };

  useEffect(() => {
    dispatch(filterUsers("all"));
  }, [list, dispatch]);

  return (
    <div className={style.userList}> 
      <Select
        onChange={(e) => {
          handleInputChange(e);
        }}
        borderColor="gray.300"
      >
        <option value="all">Todos</option>
        <option value="connected">Conectados</option>
        <option value="disconnected">Desconectados</option>
      </Select>

      <form >

<Flex justify="center">
<InputGroup>
<Input 
  placeholder='Buscar...' 
  onChange={handleInput}
  value={input}
  type="search"
  borderColor="gray.300"
  mb="20px"
/>

<InputRightElement children={<FaSearch color="#FF4e5b"/>} />
</InputGroup>
</Flex>
</form>
      <div>
        <div>
          {input
            ? listCopy
                .filter((user) => {
                  let searchUser = input.toUpperCase();

                  return (
                    searchUser && user.name.toUpperCase().startsWith(searchUser)
                  );
                })
                .map((user) => 
                 
                 { if(user.email !== "group@talkap" ){
                   return( <div key={user.id} id={user.name}>
                    <StylingUserList
                      user={user}
                      handle={() => {
                        console.log("click");
                      }}
                    />
                   </div>)
               }else{
               return <UserCard user={user} handle={handle}/>
               } }
                )
            : listCopy &&
              listCopy.map((user) => 
                 
              { if(user.email !== "group@talkap" ){
                return( <div key={user.id} id={user.name}>
                 <StylingUserList
                   user={user}
                   handle={() => {
                     console.log("click");
                   }}
                 />
                </div>)
            }else{
            return <UserCard user={user} handle={handle}/>
            } }
             )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
