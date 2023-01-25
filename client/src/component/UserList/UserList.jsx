import style from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {

  setSelected,
  filterUsers,
  setListSearch
} from "../../store/slices/users/index";
import UserCard from "../UserCard/UserCard";
import {  Select } from "@chakra-ui/react";
import { useEffect,useState } from "react";

const UserList = () => {
  const [input,setInput] = useState();

  const { listCopy, listSearch,list } = useSelector((state) => state.users);
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

  useEffect(()=>{
    dispatch(filterUsers('all'))
  },[list,dispatch]);

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
                             :listCopy&&listCopy.map((user)=>{
            
                                return <UserCard key={user.name} name={user.name} picture={user.picture} connected={user.connected}/>

                             })
                            }
                        </div>
                     </div>
                     

    </div>
  );
};

export default UserList;
