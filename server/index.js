const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { initGroup } = require("./src/services.js");
require("dotenv").config();
const PORT = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  //Inicializo el Group
  initGroup();
  server.listen(PORT, () => {
    console.log("listening at PORT " + PORT);
  });
}); 
