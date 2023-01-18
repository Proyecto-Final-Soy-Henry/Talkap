import { useSelector } from "react-redux"
export default function UserList(){
    const {list} =  useSelector(state=>state.users);
    return(<div className='user-list'>

    </div>)
}