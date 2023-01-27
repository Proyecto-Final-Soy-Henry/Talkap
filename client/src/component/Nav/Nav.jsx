import style from "./Nav.module.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import Profile from '../Profile/Profile.jsx'
import { Box, Flex } from "@chakra-ui/layout";
export default function Nav (){

    return(
        
        <Flex justifyContent="top" minW="110px" bg="white" direction="column" gap="3" alignItems="center">

                <Box mr="3" pt="2">
                    <Profile/>  
                </Box>
                
                <Box>
                    <LogoutButton/>
                </Box>
        
        </Flex>
    
    );
}
