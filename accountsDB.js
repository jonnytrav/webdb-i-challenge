const db = require("./data/dbConfig");

module.exports = {
  find,
  findById,
  update,
  insert,
  remove
};

function find() {
  return db("accounts");
}

function findById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes);
}

function insert(body) {
  return db("accounts")
    .insert(body)
    .then(response => response[0])
    .catch(err => console.error(err));
}

function remove(id) {
  return db("accounts")
    .where({ id })
    .del();
}
