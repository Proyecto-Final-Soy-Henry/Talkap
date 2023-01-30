const express = require('express');
const morgan = require('morgan');
const cors =  require('cors');
const http =  require('http');
const initialSocket= require('./socket.js');
const server =  express();
const routes = require('./routes/index.js');
const updateInfo = require('./routes/handlers/updateInfo');
const updatePic = require('./routes/handlers/updatePic');
const updateBio = require('./routes/handlers/updateBio');
const getUsers = require('./routes/handlers/getUsers');
const httpServer = http.createServer(server)
//INICIALIZO SOCKET
initialSocket(httpServer);

server.name = 'API';
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = httpServer;

