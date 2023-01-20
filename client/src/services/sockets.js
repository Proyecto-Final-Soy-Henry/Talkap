import io from 'socket.io-client';

let socket;
export const initiateSocket = (user) => {
  socket = io('http://localhost:3001');
  console.log(`Connecting socket...`);
  if (socket && user) socket.emit('join', user);
}
export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}

//funcion para cargar mi stado global con los usuarios.
export const setUserList = (dispatch,action) => {
   
  if (!socket) return(true);
  socket.on('join', value => {
    console.log('Websocket event received!');
    return dispatch(action(value))
  });
}

//Root CHAT listen
export const listenChat =(dispatch,action)=>{
  if (!socket) return(true);
  socket.on('chat',value=>{
    console.log('Websocket event received!');
  return dispatch(action(value))
  })
}

export const sendMessage = (root, message) => {
  if (socket) socket.emit(root,message);
}