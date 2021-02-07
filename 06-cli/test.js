const { deepEqual, ok } = require('assert')
const database =  require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    name: 'Kakashi',
    chakra: 'Chidori',
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    name: 'Sasuke', 
    chakra: 'Sharingan',
    id: 2
}

describe('Suite de manipulação de Herois', () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR);
    })

    it('deve pesquisar um heroi usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        

        deepEqual(resultado, expected)
    }) 

    it('deve cadastrar um heroi, usando arquivos', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        deepEqual(actual, expected)
    })

    it('deve remover um heroi por id', async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
        deepEqual(resultado, expected)
    })

    it('deve atualizar um heroi por id', async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            name: 'Naruto',
            chakra: 'Jinchuriki'
        }
        const novoDado = {
            name: 'Naruto',
            chakra: 'Jinchuriki'
        }
        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        deepEqual(resultado, expected)
    })
})