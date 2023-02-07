import swal from 'sweetalert';
export const errorMessageNull=()=>{
    const msjError= {
        icon: "error",
        buttons: [false, true],
        title: 'Oops...',
        text: 'No se puede enviar un mensaje vacío',
       
      } 
    return  swal(msjError);
}
export const errorExit = ()=>{
    const msjError= {
        title: '¿Estás segúro de desconectarte?',
        
        buttons: {
            cancel: true,
            confirm: true,
          }
    
      } 
      return swal(msjError);
}