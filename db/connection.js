// PG database client/connection setup

const { Client } = require('pg');

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const pool = new Client(dbParams);
// console.log(dbParams);
pool.connect();

// pool.query('SELECT * FROM users;'  )
// .then((response) => {
//   console.log(response);
// })
// .catch((error) =>
// console.log( error.stack))

// const getUserWithId = function(id) {
//   return pool
//     .query(`SELECT * FROM users WHERE id = $1`, [id])
//     .then((result) => {
//       console.log(result.rows);
//       if (!result.rows.length) {
//         return null;
//       }
//       return result.rows[0];
//     })
//     .catch((err) => {
//       console.log('error in getUserWithID', err.message);
//       return null;
//     });
// };

// getUserWithId(1);

module.exports = pool;
