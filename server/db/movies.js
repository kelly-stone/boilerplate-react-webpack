const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)

function getMovies() {
    return db('movies').select()
}

function getMovie(id) {
    return db('movies').select().where('id', '=', id).first()
    // console.log("our movie select query/SQL: ", db('movies').select().where('id', '=', id).toString())

}




module.exports = {
    getMovies,
    getMovie
}