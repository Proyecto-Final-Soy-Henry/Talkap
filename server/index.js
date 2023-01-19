const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const PORT = process.env.PORT || 3500;

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("listening at PORT " + PORT);
  });
});
