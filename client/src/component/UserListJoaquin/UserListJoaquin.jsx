import style from "./UserListJoaquin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelected, filterUsers } from "../../store/slices/users/index";
import UserCard from "../UserCard/UserCard";
import { Select } from "@chakra-ui/react";

const UserListJoaquin = () => {
  const { list, listCopy } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handle = (user) => {
    dispatch(setSelected(user));
  };

  const handleInputChange = (event) => {
    dispatch(filterUsers(event.target.value));
  };

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

      {listCopy?.map((user) => {
        return <UserCard user={user} handle={handle} />;
      })}
    </div>
  );
};

export default UserListJoaquin;
