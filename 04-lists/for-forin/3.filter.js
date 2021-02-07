const { getPerson } = require('./service')


Array.prototype.myFilter = function(callback) {
    const list = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if(!result) continue;
        list.push(item)
    }
    return list;
}

async function main() {
    try {
        const { results } = await getPerson(`a`)

        /**const familyLars = results.filter(function (item) {
            //por padrão precisa retornar um booleano
            //para informar se deve manter ou remover da lista
            //false -> remove da lista
            //true -> mantem da lista
            //não encontrou = -1
            //encontrou = posiçãonoArray
            const result = item.name.toLowerCase().indexOf(`lars`) !== -1
            return result
        })*/
        const familyLars = results.myFilter((item, index, list) => {
            console.log(`index: ${index}`, list.length)
            return item.name.toLowerCase().indexOf('lars') !== -1
        })

        const names = familyLars.map((person) => person.name)
        console.log(names)

    } catch(error) {
        console.error('Internal error', error)
    }
}
main()