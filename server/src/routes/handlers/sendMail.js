const nodemailer = require("nodemailer");

module.exports = async function sendMail(mail, donate, update) {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "talkaphenry@gmail.com",
      pass: "yrvrcmtfsypxefwz",
    },
  };
  const messageDonate = {
    from: "talkaphenry@gmail.com",
    to: mail,
    subject: "Talkap",
    text: "Muchas gracias por tu donación :)... Demostrar tu interes en TalKap nos motiva a nosotros los desarroladores a seguir mejorando nuestra app para ofrecer una mejor experiencia de usuario y agregar nuevas funcionalidades",
  };
  const messageUpdate = {
    from: "talkaphenry@gmail.com",
    to: mail,
    subject: "Talkap",
    text: "Has actualizado tu perfil de forma exitosa!!",
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(messageDonate);
  console.log(info);
};
