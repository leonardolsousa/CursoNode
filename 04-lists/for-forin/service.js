const axios = require('axios')
const URL = `https://swapi.dev/api/people`

async function getPerson (name) {
    const url = `${URL}/?search=${name}&format=json`
    const response = await axios.get(url)
    return response.data
}

/** 
getPerson('R2')
    .then(function (result) {
    console.log('Result', result)
})
    .catch(function (error) {
        console.error('Not Found', error)
    })
*/
module.exports = {
    getPerson
}