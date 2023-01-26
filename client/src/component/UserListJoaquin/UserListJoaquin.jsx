import style from "./UserListJoaquin.module.css";
import { useDispatch, useSelector } from "react-redux";
import {

  setSelected,
  filterUsers,
  setListSearch
} from "../../store/slices/users/index";
import UserCard from "../UserCard/UserCard";
import { Select } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const UserListJoaquin = () => {\
  const {input, setInput} = useState("")
  const { list, listCopy, listSearch } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handle = (user) => {
    dispatch(setSelected(user));
  };

  const handleInputChange = (event) => {
    dispatch(filterUsers(event.target.value));
  };

  const handleSearch = (user) => {
    dispatch(setListSearch(user));
  };
  function handleInput(e){
    e.preventDefault()
    setInput(e.target.value)

}
  return (
    <div className={style.userList}>
      <Select
        onChange={(e) => {
          handleInputChange(e);
        }}
      >
        <option value="all">Todos</option>
        <option value="connected">Conectados</option>
        <option value="disconnected">Desconectados</option>
      </Select>

      <form> 
                <input onChange={handleInput} value={input} type="search" placeholder="Search..." aria-label="Search"/> 
       </form> 
              <div >
                        <div>
                            {input?listCopy.filter(user => {
                               
                            let searchUser = input.toUpperCase()
                            
                            return searchUser && user.name.toUpperCase().startsWith(searchUser) 
                        })
                        .map(user=>(
                            
                            <div key={user.id} id={user.name}>
                                <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>
                            </div>

                        ))
                             :list?.map((user)=>{
            
                                return <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>

                             })
                            }
                        </div>
                </div>


      {/* <SearchBar search={listCopy} filter={"name"} handle={handleSearch}/>
      
      {listSearch.length > 0 && listSearch[0] !== "Not Find" ? (
        listSearch.map((user) => {
          return <UserCard user={user} handle={handle} />;
        })
      ) : listSearch[0] == "Not Find" ? (
        <p>Usuario no encontrado</p>
      ) : (
        listCopy?.map((user) => {
          return <UserCard user={user} handle={handle} />;
        })
      )}   */}
    </div>
  );
};

export default UserListJoaquin;
