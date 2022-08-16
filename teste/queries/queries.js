const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ryan',
    host: 'localhost',
    database: 'testes',
    password: '123',
    port: 5432,
})


const getChartById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT salario FROM chart WHERE id = $1', [id], (error, results) => {
        //chat1 = results.rows[0]['salario'];
        //console.log(results.rows[0]['dim_mes'])
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
    console.log('CHART');
}

module.exports = {
    getChartById

}