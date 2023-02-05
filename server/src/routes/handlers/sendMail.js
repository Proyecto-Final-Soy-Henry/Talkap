const nodemailer = require("nodemailer");

module.exports = async function sendMail(mail, typeMail) {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "talkaphenry@gmail.com",
      pass: "yrvrcmtfsypxefwz",
    },
  };

  const messageWelcome = {
    from: "talkaphenry@gmail.com",
    to: mail,
    subject: "Bienvenidos a Talkap",
    html: `<div
    style="
      display: flex;
      background: linear-gradient(to right, #1d2671, #ff4e5b);
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      // width: 500px;
      // height: 500px;
      border-radius: 30px;
      padding: 20px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    "
  >
    <img style="width: 150px" src="https://i.postimg.cc/ydb9ddkX/Logo.png" />
    <h1 style="font-size: 30px; color: rgb(155, 155, 252); text-align: center">
      ¡Bien venido a Talkap!
    </h1>
    <p
      style="
        font-size: 20px;
        text-align: justify;
        color: rgb(220, 220, 250);
        letter-spacing: 1px;
      "
    >
      Tu cuenta ha sido registrada exitosamente :) <br />
      Disfruta chateando con quien quieras y se respetuoso con las personas.
    </p>
  </div>`,
  };

  const messageDonate = {
    from: "talkaphenry@gmail.com",
    to: mail,
    subject: "Donacion exitosa",
    html: `<div
    style="
      display: flex;
      background: linear-gradient(to right, #1d2671, #ff4e5b);
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 500px;
      height: 500px;
      border-radius: 30px;
      padding: 20px;
      font-family: cursive;
    "
  >
    <img style="width: 150px" src="https://i.postimg.cc/ydb9ddkX/Logo.png" />
    <h1 style="font-size: 30px; color: rgb(250, 250, 250); text-align: center">
      Muchas gracias por tu donación :)
    </h1>
    <p
      style="
        font-size: 20px;
        text-align: justify;
        color: #fff;
        letter-spacing: 1px;
      "
    >
      Demostrar tu interes en <strong>Talkap</strong> nos motiva a nosotros los
      desarroladores a seguir mejorando nuestra app para ofrecer una mejor
      experiencia.
    </p>
  </div>`,
  };

  const messageBan = {
    from: "talkaphenry@gmail.com",
    to: mail,
    subject: "Baneo de cuenta",
    html: `<div
    style="
      background: linear-gradient(to right, #0b0f2e, #72080f);
      height: 100vh;
      align-items: center;
      width: 500px;
      height: 500px;
      border-radius: 30px;
      padding: 20px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    "
  >
    <img
      style="
        width: 170px;
        position: relative;
        margin-left: 170px;
        margin-top: 20px;
        margin-bottom: 20px;
      "
      src="https://i.postimg.cc/ydb9ddkX/Logo.png"
    />
    <h1 style="font-size: 25px; color: rgb(250, 0, 0); text-align: center">
      Tu cuenta has sido <strong>Baneada</strong>
    </h1>
    <p
      style="
        font-size: 18px;
        text-align: justify;
        color: #fff;
        letter-spacing: 1px;
      "
    >
      En <strong>Talkap</strong> permitimos muchas cosas, pero insultar a
      personas, compartir contenido explicito, sexual y que se yo cuanto...
      Puede hacer que pierdas tu cuenta y todos tus datos registrados.
      <br />
      <br />
      <strong style="color: #f00">AVISO</strong> Cualquier insulto a uno de los
      desarrolladores de Talkap bloqueará tu cuenta permanentemente.
    </p>
  </div>`,
  };

  const transport = nodemailer.createTransport(config);

  if (typeMail === "welcome") await transport.sendMail(messageWelcome);
  if (typeMail === "donate") await transport.sendMail(messageDonate);
  if (typeMail === "ban") await transport.sendMail(messageBan);
};
