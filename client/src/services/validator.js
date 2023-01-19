
export  function userValidator (user){

    fetch('http://localhost:3001',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }
       })
       .catch(error=>console.log(error))


}

