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
export const sendMessage = (room, message) => {
  if (socket) socket.emit('chat', { message, room });
}