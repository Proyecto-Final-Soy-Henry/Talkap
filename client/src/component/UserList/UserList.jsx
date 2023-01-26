import style from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filterUsers,
} from "../../store/slices/users/index";
import { useEffect,useState } from "react";
import StylingUserList from "./StylingUserList";
import {  Box, Select } from "@chakra-ui/react";
const UserList = () => {
  const [input,setInput] = useState();

  const { listCopy,list } = useSelector((state) => state.users);
  const dispatch = useDispatch();


  const handleInputChange = (event) => {
    dispatch(filterUsers(event.target.value));
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
        <option  value="all">Todos</option>
        <option value="connected">Conectados</option>
        <option value="disconnected">Desconectados</option>
      </Select>


      <form> 
                <input onChange={handleInput} value={input} type="search" placeholder="Search..." aria-label="Search"/> 
            </form> 
                     <div >
                        <div>
                            {input?list.filter(user => {
                               
                            let searchUser = input.toUpperCase()
                            
                            return searchUser && user.name.toUpperCase().startsWith(searchUser) 
                        })
                        .map(user=>(
                            
                            <div key={user.id} id={user.name}>
                                 <StylingUserList user={user} handle={()=>{console.log('click')}}/>
                            </div>

                        ))
                             :listCopy&&listCopy.map((user)=>{
            
                                return  (
                                  <Box key={user.email}>
                                   <StylingUserList user={user} handle={()=>{console.log('click')}}/>
                                  </Box>
                                )

                })
              }
          </div>
        </div>
                     

    </div>
  );
};

export default UserList;
