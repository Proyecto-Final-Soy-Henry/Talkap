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

import style from "./RightHome.module.css";
import ButtonRight from "./ButtonRight.jsx";

const RightHome = () => {
  const colors = useColorModeValue(["#2322239c", "#2322239c"]);

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className={style.container}>
      <div className={style.buttonRight}>
        <ButtonRight clicked={clicked} handleClick={handleClick} />
      </div>
      <Tabs
        isFitted
        onChange={(index) => setTabIndex(index)}
        bg={bg}
        color="black"
      >
        <div className={`${style.rightHead} ${clicked ? style.active : ""}`}>
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
            <TabPanel>{<FriendsList />}</TabPanel>
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
};

export default RightHome;