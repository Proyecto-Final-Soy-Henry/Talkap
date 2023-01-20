import {getCurrentUser} from '../store/slices/users/index.js'

export function getUser(dispatch, id){
   
    // fetch(`http://localhost:3001/users/${id}`)
    //     .then(response=>response.json())
    //         .then(response=>dispatch(getCurrentUser(response)))

    // .catch(error=>{console.log(error)})

    const user = {
        name: "Juan carlos",
        email: "JuanC@gmail.com",
        picture: "https://d500.epimg.net/cincodias/imagenes/2019/06/04/lifestyle/1559679036_977776_1559679371_noticia_normal.jpg",
        bio: "esta es la biografia mia jajaj pongamos mas texto a ver como se ve"
    }


    return dispatch(getCurrentUser(user))
}