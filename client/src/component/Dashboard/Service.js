  export const getScoresMessages = (scores)=>{
    //se hardcodea 20 mensajes en enéro para tenér un número que mostrar
    let array = [20,0,0,0,0,0,0,0,0,0,0,0];
   scores.forEach((element) => {
    
     switch (element) {
       case '01':  array[0]=array[0]+1;
         break;
       case '02':  array[1]=array[1]+1;
         break;  
       case '03':  array[2]=array[2]+1;
         break;
       case '04':  array[3]=array[3]+1;
         break;
       case '05':  array[4]=array[4]+1;
         break;
       case '06':  array[5]=array[5]+1;
         break;
       case '07':  array[6]=array[6]+1;
         break;
       case '08':  array[7]=array[7]+1;
         break;
       case '09':  array[8]=array[8]+1;
         break;
       case '10':  array[9]=array[9]+1;
         break;
       case '11':  array[10]=array[10]+1;
         break;
       case '12':  array[11]=array[11]+1; 
         break;      
       default:
         break;
     }
 
   });
  
   return array;
 }

   export const getScoresUsers = (scores)=>{
     let array = [5,0,0,0,0,0,0,0,0,0,0,0];
    scores.forEach((element) => {
     
      switch (element) {
        case '01':  array[0]=array[0]+1;
          break;
        case '02':  array[1]=array[1]+1;
          break;  
        case '03':  array[2]=array[2]+1;
          break;
        case '04':  array[3]=array[3]+1;
          break;
        case '05':  array[4]=array[4]+1;
          break;
        case '06':  array[5]=array[5]+1;
          break;
        case '07':  array[6]=array[6]+1;
          break;
        case '08':  array[7]=array[7]+1;
          break;
        case '09':  array[8]=array[8]+1;
          break;
        case '10':  array[9]=array[9]+1;
          break;
        case '11':  array[10]=array[10]+1;
          break;
        case '12':  array[11]=array[11]+1; 
          break;      
        default:
          break;
      }
  
    });
   
    return array;
  }