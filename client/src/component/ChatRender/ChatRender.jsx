import { useSelector } from "react-redux";
import "./ChatRender.css";

import React, { useRef, useEffect, useState } from "react"; //No borrar

export default function ChatRender({ menssages }) {
  const containerRef = useRef(null);
  let img = false;
  let video = false;
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
        } else if (
          msj.message.includes(
            "https://res.cloudinary.com/daekdf1sh/video/private"
          )
        ) {
          video = true;
        } else {
          img = false;
          video = false;
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
                        className={prev && "imgMe"}
                        src={link}
                        alt=""
                      />
                    ) : (
                      <span></span>
                    )}
                    <div className="divMensMe">
                      <img onClick={handleSrcImg} src={msj.message} alt="" />
                    </div>
                    {prev ? (
                      <img
                        onClick={handlePrev}
                        className={prev && "imgMe"}
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
                      invalid format
                    </video>
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
                      className={prev && "imgOther"}
                      src={link}
                      alt=""
                      // initial={{ scale: 0.5 }}
                      // animate={{ scale: 1.2 }}
                      // transition={{
                      //   duration: 0.3,
                      //   ease: [0.5, 0.5, 0.7, 1.01],
                      // }}
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
                    invalid format
                  </video>
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
