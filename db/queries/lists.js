const db = require('../connection');

const getLists = () => {
  return db.query('SELECT * FROM lists;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getLists };
