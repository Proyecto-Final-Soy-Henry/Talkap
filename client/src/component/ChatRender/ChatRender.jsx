import { useSelector } from "react-redux";
import "./ChatRender.css";

import React, { useRef, useEffect } from "react"; //No borrar

export default function ChatRender({ menssages }) {
  const containerRef = useRef(null);

  const handleUpdate = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  };

  const { my } = useSelector((state) => state.users);

  useEffect(() => {
    handleUpdate();
  }, [menssages]);

  return (
    <div ref={containerRef} className="chat-render">
      {menssages?.map((msj, index) => {
        if (!msj.message) {
          return () => {};
        } else {
          if (my.email === msj.user) console.log(msj.email);
          let name1 = msj.user;
          if (msj.user.includes("@")) {
            let newName = [];
            for (let i = 0; msj.user[i] !== "@"; i++) {
              newName.push(msj.user[i]);
            }
            name1 = newName.join("");
          }
          // console.log(my.email,name1,msj.user)
          if (my.email === msj.user || name1 === my.email) {
            return (
              <div key={index} className="divMenssageMe">
                {msj.message.includes(
                  "https://res.cloudinary.com/daekdf1sh/image/private"
                ) ? (
                  <img src={msj.message} alt="" />
                ) : msj.message.includes(
                    "https://res.cloudinary.com/daekdf1sh/video/private/"
                  ) ? (
                  <video controls>
                    <source src={msj.message} type="video/mp4" />
                    <source src={msj.message} type="video/webm" />
                    <source src={msj.message} type="video/ogg" />
                    invalid format
                  </video>
                ) : (
                  <p> {msj.message} </p>
                )}
                <br />
              </div>
            );
          }

          return (
            <div key={index} className="divMenssage">
              {msj.message.includes(
                "https://res.cloudinary.com/daekdf1sh/image/private"
              ) ? (
                <div>
                  {" "}
                  <p>{name1}</p>
                  <img src={msj.message} alt="" />
                </div>
              ) : msj.message.includes(
                  "https://res.cloudinary.com/daekdf1sh/video/private/"
                ) ? (
                <div>
                  <p>{name1}</p>
                  <video controls>
                    <source src={msj.message} type="video/mp4" />
                    <source src={msj.message} type="video/webm" />
                    <source src={msj.message} type="video/ogg" />
                    invalid format
                  </video>
                </div>
              ) : (
                <p>
                  {name1} : {msj.message}
                </p>
              )}

              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
