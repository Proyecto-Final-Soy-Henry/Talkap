import { Flex, Divider, Button} from "@chakra-ui/react";
import { MdBuild} from "react-icons/md"
import { useSelector } from "react-redux";
import ChatsList from "../ChatsList/ChatsList.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import Profile from "../Profile/Profile.jsx";


export default function Nav({handle}) {

  const {my} =  useSelector(state=>state.users)
  return (
    <Flex
      justifyContent="flex-start"
      minW="18%"
      bg="#ff4f5a"
      direction="column"
      gap="3" 
    >

      <Flex direction={{base:"column", lg:"row"}} p="3px" justify="space-between" alignItems="center"> 
        <Profile />
        {my.type==='admin'&&<Flex>
        <Button 
        leftIcon={<MdBuild />} 
        colorScheme='gray' 
        color="white"
        _hover={{color:"black", bg:"white"}}
        variant='outline' 
        size='sm'
        mt="20px"
        onClick={()=>{handle(true)}}>
          Admin
          </Button>
       </Flex>}
      </Flex>

    <Divider mt="-7px" mb="6px"/>
      


      <Flex mx="2">
        <ChatsList />
      </Flex>
       
    </Flex>
  );
}
