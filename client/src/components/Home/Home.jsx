import style from "./Home.module.css";
import Nav from "../Nav/Nav.jsx";
import Chat from "../Chat/Chat";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { defer } from "react-router-dom";

const API_URL = "http://localhost:3001";
const socket = io(API_URL);

const Home = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    socket.on("message", (value) => {
      setMessage([
        ...message,
        {
          message: value.message,
          user: value.user,
        },
      ]);
    });
    return () => {
      socket.off("message");
    };
  }, [message]);
  const buttonHandler = (value) => {
    socket.emit("message", value);
    setMessage([
      ...message,
      {
        message: value,
        user: "Me",
      },
    ]);
  };

  return (
    <div className={style.homeContainer}>
      <Nav />
      <Chat buttonHandler={buttonHandler} />
      {message &&
        message.map((e, i) => {
          return (
            <div key={i}>
              <p>
                {e.user} : {e.message}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
