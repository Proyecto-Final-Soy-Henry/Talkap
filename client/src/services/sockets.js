import io from 'socket.io-client';

let socket;
//INICIA SOCKET CONECTADO CON RUTA JOIN Y MANDANDO EL USUARIO
export const initiateSocket = (user) => {
  socket = io('http://localhost:3001');
  console.log(`Connecting socket...`);
  if (socket && user) socket.emit('join', user);
}
//DESCONECTA SOCKET
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

//ESCUCHO RUTA JOIN Y SETEO MI ESTADO
export const getUserList = (dispatch,action) => {

  if (!socket) return(true);
  socket.on('join', value => {
    return dispatch(action(value))
  });
}

//ESCUCHO RUTA CHAT Y SETEO MI ESTADO
export const getChat =(dispatch,action)=>{

  if (!socket) return(true);
  socket.on("chat",value=>{
  return dispatch(action(value))
  })
}

export const getMyData = (dispatch,action)=>{
  if (!socket) return(true);
  socket.on('myData',value=>{
    return dispatch(action(value))
  })
}
export const getMenssages = (id,dispatch,action)=>{
  if (!socket) return(true);
  socket.on(id,value=>{
    return dispatch(action(value))
  })
}

//MANDAR MENSAJE A UNA RUTA DEL SERVER
export const sendMessage = (root, message) => {
  if (socket) socket.emit(root,message);
}