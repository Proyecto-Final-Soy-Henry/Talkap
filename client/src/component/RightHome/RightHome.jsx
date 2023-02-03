import { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  useColorModeValue,
} from "@chakra-ui/react";
import UserList from "../UserList/UserList.jsx";
import FriendsList from "../FriendsList/FriendsList.jsx"

const RightHome = () => {
  const colors = useColorModeValue(["#2322239c", "#2322239c"]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs isFitted w="19%" onChange={(index) => setTabIndex(index)} bg={bg} color="black">
      <TabList>
        <Tab

          color="white"
          _focus={{ color: "#fe4e5b" }}
          fontWeight="semibold"
        >
          Usuarios
        </Tab>

        <Tab
          color="white"
          _focus={{ color: "#fe4e5b" }}
          fontWeight="semibold"
        >
          Amigos
        </Tab>
      </TabList>
      <TabPanels>
        {/* <TabPanel overflow="hidden" overflowY="scroll"> */}
       <TabPanel>
          {<UserList />}
        </TabPanel>
        <TabPanel>{<FriendsList/>}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default RightHome;

