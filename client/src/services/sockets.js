import io from "socket.io-client";

let socket;
//INICIA SOCKET CONECTADO CON RUTA JOIN Y MANDANDO EL USUARIO
export const initiateSocket = (user) => {
  // socket = io('http://localhost:3001');
  socket = io("https://serverdeploy-production.up.railway.app/");
  console.log(`Connecting socket...`);
  if (socket && user) {
    socket.emit("join", user);
  }
};
//SOCKET OF
export const socketOff = (port) => {
  return socket.off(port);
};
//DESCONECTA SOCKET
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};
//ESCUCHO ID DONDE RECIBO MENSAJES
export const listenId = (id, handle) => {
  if (!socket) return true;
  socket.on(id, (response) => {
    return handle(response);
  });
};

//ESCUCHO RUTA USERS Y ACTUALIZO EL ESTADO
export const listenUsers = (dispatch, action) => {
  if (!socket) return console.log("No hay soket");
  socket.on("users", (value) => {
    console.log("estoy consologueando el value del coso", value);
    return dispatch(action(value));
  });
  console.log("Fuera del if");
};

//MANDAR MENSAJE A UNA RUTA DEL SERVER
export const sendMessage = (root, message) => {
  if (socket) socket.emit(root, message);
};

//ESCUCHO EL EVENTO GRUPO
export const listenGroup = (dispatch, action) => {
  if (!socket) return true;
  socket.on("group", (value) => {
    return dispatch(action(value));
  });
};

//// UPDATE DATA USER////

//UPDATE Nombre
export const updateInfo = (email, nombre) => {
  if (!socket) return true;
  socket.emit("updateInfo", { email, nombre });
};
export const sendInfo = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updateInfo", (value) => {
    return dispatch(action(value));
  });
};
//  UPDATE PIC
export const updatePic = (email, pic) => {
  if (!socket) return true;
  socket.emit("updatePic", { email, pic });
};
export const sendPicInfo = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updatePic", (value) => {
    return dispatch(action(value));
  });
};
//UPDATE BIO
export const updateBio = (email, bio) => {
  if (!socket) return true;
  socket.emit("updateBio", { email, bio });
};
export const sendBio = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updateBio", (value) => {
    return dispatch(action(value));
  });
};