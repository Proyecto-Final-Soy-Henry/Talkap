import { Flex ,Button } from "@chakra-ui/react";
import { MdBuild} from "react-icons/md"
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import Profile from "../Profile/Profile.jsx";
export default function Nav({handle}) {

  const {my} =  useSelector(state=>state.users)
  return (
    <Flex
      justifyContent="space-between"
      minW="110px"
      bg="#ff4f5a"
      direction="column"
      gap="3"
      alignItems="center"
    >
      <Flex justify="flex-start" mt="3" mr="3 ">
        <Profile />
      </Flex>
       {my.type==='admin'&&<Flex>
        <Button leftIcon={<MdBuild />} colorScheme='whiteAlpha' variant='outline' size='sm' onClick={()=>{handle(true)}}>
          Admin
          </Button>
       </Flex>}
      <Flex>
        <LogoutButton />
      </Flex>
    </Flex>
  );
}
