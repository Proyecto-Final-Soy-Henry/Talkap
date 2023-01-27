import { Box, Flex } from "@chakra-ui/react";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import Profile from '../Profile/Profile.jsx'
export default function Nav (){

    return(
    
   <Flex 
   justifyContent="space-between" 
   minW="110px" 
   bg="white" 
   direction="column" 
   gap="3" 
   alignItems="center"
  
   >

        <Flex justify="flex-start" mt="3" mr="3 ">
            <Profile/>  
        </Flex>
        
        <Flex>
            <LogoutButton />
        </Flex>
 
    

    </Flex>
       
  );
}
