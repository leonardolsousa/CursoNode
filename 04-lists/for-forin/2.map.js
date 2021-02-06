const service = require('./service')

Array.prototype.myMap = function (callback){
    const newArrayMap = []
    for(let indice=0; indice <= this.length - 1; indice++) {
        const result = callback(this[indice], indice)
        newArrayMap.push(result)
    }

    return newArrayMap;
}

async function main() {
    try {
        const results = await service.getPerson(`a`)
        //const names = []

        /**results.results.forEach(function (item) {
            names.push(item.name)
        })*/

        /**const names = results.results.map(function (person) {
            return person.name
        })*/

        //const names = results.results.map((person) => person.name)

        const names = results.results.myMap(function(person, indice) {
            return `[${indice}]${person.name}`
        })
 
        console.log('Names', names)
    } catch(error) {
        console.error('Internal Error', error)
    }
}
main()