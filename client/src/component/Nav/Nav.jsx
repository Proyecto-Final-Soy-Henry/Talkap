import { Flex, Button, Text} from "@chakra-ui/react";
import { MdBuild} from "react-icons/md"
import { useSelector } from "react-redux";
import ChatsList from "../ChatsList/ChatsList.jsx";
import Profile from "../Profile/Profile.jsx";
import { errorExit } from "../../services/sweetalert.js"; 
import {sendMessage} from '../../services/sockets'
import { BsBoxArrowInRight } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

import style from "./Nav.module.css";

export default function Nav({handle}) {

  const { user, logout } = useAuth0();
  const {my} =  useSelector(state=>state.users)
  const handler = () => {
    errorExit().then((response) => {
      if (response) {
        sendMessage("exit", user);
        logout({
          returnTo: "https://client-deploy-wild-design.vercel.app/",
          client_id: "WawCbbdYBrnbIDvqnhUIyulgHhicovQJ",
        });
      }
    });
  };

  return (
    <div className={style.container}>
    <Flex
      justifyContent="flex-start"
      flexDirection={"column"}
      bg="#232223"
      direction="column"
      gap="3" 
    >

      <Flex direction={{base:"column", lg:"row"}} p="3px" mb="20px" justify="space-between" alignItems="center"> 
        <Profile />
        {my.type==='admin'&&<Flex>
        <Button 
          leftIcon={<MdBuild />} 
          colorScheme='gray' 
          color="white"
          _hover={{color:"black", bg:"white"}}
          variant='outline' 
          size='sm'
          mt="10px"
          mr="10px"
          onClick={()=>{handle(true)}}
          >
          Admin
          </Button>
       </Flex>}
      </Flex>
    

    <Flex justify="center">
      <Text as="b" color="white" > Chats Activos </Text>
    </Flex>


      <Flex mx="2">
        <ChatsList />
      </Flex>
       

      {/* <Flex justifyContent={"center"} bg="red">
      <Button
            onClick={handler}
            bg="#FF4e5b"
            _hover={{bg:"red.500"}}
            rightIcon={<BsBoxArrowInRight />}
            colorScheme="white"
            variant="solid"
            position="absolute"
            bottom="16"
            
          >
            Cerrar Sesión   
        </Button>
      </Flex> */}

    </Flex>
    </div>
  );
}