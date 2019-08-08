const db = require("./data/dbConfig");

module.exports = {
  get,
  getById,
  update,
  insert,
  remove
};

function get() {
  return db.select("accounts");
}

function getById(id) {
  db.select("accounts")
    .where({ id })
    .first();
}

function update(id, changes) {
  db.select("accounts")
    .where({ id })
    .update(changes);
}

function insert(body) {
  db.select("accounts")
    .insert(body)
    .then(response => console.log(response));
}

function remove(id) {
  db.select("accounts")
    .where({ id })
    .del();
}
