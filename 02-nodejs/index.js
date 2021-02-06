/*
Obter um user
Obter o numero de telefone de um user a partir do seu ID
Obter o endereço do usuario pelo ID
 */

 function getUser(callback) {
    setTimeout(function () {
       return callback(null, {
          id: 1,
          name: 'Leo',
          dateBirth: new Date()
       })     
    }, 1000)
 }

 function getPhone(idUser, callback) {
      setTimeout(() => {
         return callback(null, {
            phone: '996941313',
            ddd: 13
         })

      }, 2000);
 }

 function getAdress(idUser, callback) {
      setTimeout(() => {
      return callback(null, {
         street: 'Rua dos Passaros',
         number: 1500
      })

   }, 2000);

 }

 getUser(function solveUser(error, user) {
    // null || "" || 0 === false 
    if(error) {
       console.error('User not found', error)
       return;
    }
 getPhone(user.id, function solvePhone(error1, phone) {
    if(error) {
       console.error('Phone not found', error1)
       return;
    }
 getAdress(user.id, function solveAdress(error2, adress) {
    if(error2) {
       console.error('Adress not found', error2)
    }

    console.log(`
     Name: ${user.name}
     Adress: ${adress.street},${adress.number}
     Phone: (${phone.ddd})${phone.phone}
    `)
      })
   })
 })
 //const phone = getPhone(user.id)

 //console.log('user', user)
 //console.log('phone', phone)
