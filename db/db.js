const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'javier',
      password : process.env.DB_PASSWORD ||'password',
      database : 'aenima_db'
    }
  });

const saveInOperation = data => {
    return knex('inoperation').insert(data);
}

const saveOutOperation = data => {
    return knex('outoperation').insert(data);
}

const saveCashOp = data => {
    return knex('cash').insert(data);
}

const exit = () => knex.destroy();

module.exports = {
    saveCashOp,
    saveInOperation,
    saveOutOperation,
    exit
}