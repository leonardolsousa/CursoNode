/*
Obter um user
Obter o numero de telefone de um user a partir do seu ID
Obter o endereço do usuario pelo ID
 */

 //importamos um modulo interno do node.js
 const util = require('util');
 const getAdressAsync = util.promisify(getAdress)


 function getUser() {
    //quando der algum problema -> reject(erro)
    //quando rodar -> resolv
    return new Promise(function resolvePromise(resolve, reject){
      setTimeout(function () {
      // return reject(new Error ('Houston we have a problem!'))

         return resolve({
            id: 1,
            name: 'Leo',
            dateBirth: new Date()
         })     
      }, 1000)
    })   
 }

 function getPhone(idUser) {
    return new Promise(function resolvePromise(resolve, reject) {
      setTimeout(() => {
         return resolve({
            phone: '996941313',
            ddd: 13
         })
      }, 2000);
    })   
 }

 function getAdress(idUser, callback) {
      setTimeout(() => {
      return callback(null, {
         street: 'Rua dos Passaros',
         number: 1500
      })

   }, 2000);

 }

 //adiconar a palavra async -> automaticamente ela retornará uma promise
 main()
 async function main() {
    try {
       console.time('medida-promise')
         const user = await getUser()
         //const phone = await getPhone(user.id)
         //const adress = await getAdressAsync(user.id)
         const resultado = await Promise.all([
            getPhone(user.id),
            getAdressAsync(user.id)
         ])
         const adress = resultado [1]
         const phone = resultado [0]
         console.log(`
            Name: ${user.name},
            Phone: (${phone.ddd}) ${phone.phone},
            Adress: ${adress.street}, ${adress.number}
         `)
         console.timeEnd('medida-promise')

    } catch (error) {
       console.error('Not Found', error)
    }
 }

 /** 
 const userPromise = getUser()
 //para manipular sucesso usamos a função .then
 //para manipular erros usamos o .catch
 userPromise
      //captura o user e o telefone também
      .then(function (resultado) {
         return getPhone(resultado.id)
            .then(function solvePhone(result) {
               return {
                  user: {
                     name: resultado.name,
                     id: resultado.id
                  },
                  phone: result 
               }

            })
      })
      .then(function (resultado) {
         const adress = getAdressAsync(resultado.user.id)
         return adress.then(function solveAdress(result) {
            return {
               user: resultado.user,
               phone: resultado.phone,
               adress: result
            }
         });
      })
      .then(function (result) {
         console.log(`
         Name: ${result.user.name}
         Adress: ${result.adress.street}, ${result.adress.number}
         Phone: (${result.phone.ddd}) ${result.phone.phone}
         `)
      })
      .catch(function (error) {
         console.log('Error', error)
      })

 /** 
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

 */

 