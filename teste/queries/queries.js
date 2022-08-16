const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ryan',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5433,
})

const getChats = (request, response) => {
    pool.query('SELECT * FROM chat ORDER BY id', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
var numum = 10;
const getChatById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT chatum, chatdois FROM chat WHERE id = $1', [id], (error, results) => {
        chat1 = results.rows[0]['chatum'];
        console.log(results.rows[0]['chatum'])
        console.log(results.rows[0]['chatdois'])
        //const obj = JSON.parse(results.rows);
       // console.log(obj.chatum);
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('Olá');
}

const getChartById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT numum FROM chartest WHERE id = $1', [id], (error, results) => {
        chat1 = results.rows[0]['chatum'];
        console.log(results.rows[0]['numum'])
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('CHART');
}

module.exports = {
    getChats,
    getChatById,
    getChartById

}