import { useSelector } from "react-redux";
import "./ChatRender.css";

import React, { useRef, useEffect, useState } from "react"; //No borrar

export default function ChatRender({ menssages }) {
  const containerRef = useRef(null);
  let img = false;
  let video = false;
  let audio = false;
  const handleUpdate = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  };

  const { my } = useSelector((state) => state.users);

  useEffect(() => {
    handleUpdate();
  }, [menssages]);

  const [prev, setPrev] = useState(false);
  const [link, setLink] = useState("");

  const handleSrcImg = (event) => {
    const src = event.target.getAttribute("src");
    setPrev(true);
    setLink(src);
  };
  const handlePrev = () => {
    setPrev(false);
  };

  return (
    <div ref={containerRef} className="chat-render">
      {menssages?.map((msj, index) => {
        if (
          msj.message.includes(
            "https://res.cloudinary.com/daekdf1sh/image/private"
          )
        ) {
          img = true;
          video = false;
          audio = false;
        } else if (
          msj.message.includes(
            "https://res.cloudinary.com/daekdf1sh/video/private"
          ) &&
          !msj.message.includes("audioschatapp")
        ) {
          video = true;
          audio = false;
          img = false;
        } else if (msj.message.includes("audioschatapp75281abc.mp3")) {
          audio = true;
          img = false;
          video = false;
        } else {
          img = false;
          video = false;
          audio = false;
        }

        if (!msj.message) {
          return () => {};
        } else {
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
              <div>
                {img ? (
                  <>
                    <div className="divMensMe">
                      <img onClick={handleSrcImg} src={msj.message} alt="" />
                    </div>
                    {prev ? (
                      <img
                        onClick={handlePrev}
                        className="imgMe"
                        src={link}
                        alt=""
                      />
                    ) : (
                      <span></span>
                    )}
                  </>
                ) : video ? (
                  <div className="divMensMe">
                    <video controls>
                      <source src={msj.message} type="video/mp4" />
                      <source src={msj.message} type="video/webm" />
                      <source src={msj.message} type="video/ogg" />
                      <source src={msj.message} type="video/mpeg" />
                      invalid format
                    </video>
                  </div>
                ) : audio ? (
                  <div className="divMensMe">
                    <audio controls>
                      <source src={msj.message} type="audio/mpeg" />
                    </audio>
                  </div>
                ) : (
                  <div className="divMenssageMe">
                    <p> {msj.message} </p>
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={index}>
              {img ? (
                <div className="divMens">
                  <img onClick={handleSrcImg} src={msj.message} alt="" />
                  {prev ? (
                    <img
                      onClick={handlePrev}
                      className="imgOther"
                      src={link}
                      alt=""
                    />
                  ) : (
                    <span></span>
                  )}
                  <span className="span">enviado por {name1}</span>
                </div>
              ) : video ? (
                <div className="divMens">
                  <span className="span">{name1} :</span>
                  <video controls>
                    <source src={msj.message} type="video/mp4" />
                    <source src={msj.message} type="video/webm" />
                    <source src={msj.message} type="video/ogg" />
                    <source src={msj.message} type="video/mpeg" />
                    invalid format
                  </video>
                </div>
              ) : audio ? (
                <div className="divMens">
                  <span className="span">{name1} :</span>
                  <audio controls>
                    <source src={msj.message} type="audio/mpeg" />
                  </audio>
                </div>
              ) : (
                <div className="divMenssage">
                  <span className="span">{name1} :</span>
                  <p> {msj.message}</p>
                </div>
              )}

              <br />
            </div>
          );
        }
      })}
    </div>
  );
}
