import io from "socket.io-client";

let socket;
//INICIA SOCKET CONECTADO CON RUTA JOIN Y MANDANDO EL USUARIO
export const initiateSocket = (user) => {
  // socket = io("http://localhost:3001");
  socket = io("https://serverdeploy-production.up.railway.app/");
  console.log(`Connecting socket...`);
  if (socket && user) socket.emit("join", user);
};
//DESCONECTA SOCKET
export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

//ESCUCHO RUTA JOIN Y SETEO MI ESTADO
export const getUserList = (dispatch, action) => {
  if (!socket) return true;
  socket.on("join", (value) => {
    return dispatch(action(value));
  });
};

//ESCUCHO RUTA CHAT Y SETEO MI ESTADO
export const getChat = (dispatch, action) => {
  if (!socket) return true;
  socket.on("chat", (value) => {
    return dispatch(action(value));
  });
};

export const getMyData = (dispatch, action) => {
  if (!socket) return true;
  socket.on("myData", (value) => {
    return dispatch(action(value));
  });
};

//ACTUALIZAR INFO
export const updateInfo = (email, nombre) => {
  if (!socket) return true;
  socket.emit("updateInfo", {email, nombre});
};
export const sendInfo = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updateInfo", (value) =>{
    return dispatch(action(value))
  });
};

export const updatePic = (email, pic) => {
  if (!socket) return true;
  socket.emit("updatePic", {email, pic});
};
export const sendPicInfo = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updatePic", (value) => {
    return dispatch(action(value))
  });
};

export const updateBio = (email, bio) => {
  if (!socket) return true;
  socket.emit("updateBio", {email, bio});
};
export const sendBio = (dispatch, action) => {
  if (!socket) return true;
  socket.on("updateBio", (value) => {
    return dispatch(action(value))
  });
};


export const getMenssages = (id, dispatch, action) => {
  if (!socket) return true;
  socket.on(id, (value) => {
    return dispatch(action(value));
  });
};

//MANDAR MENSAJE A UNA RUTA DEL SERVER
export const sendMessage = (root, message) => {
  if (socket) socket.emit(root, message);
};
