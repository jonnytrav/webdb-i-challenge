const express = require("express");

const db = require("./accountsDB");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  db.find()
    .then(response => {
      res.status(200).json({ success: true, response });
      //   console.log(response);
    })
    .catch(err => console.error(err));
});

server.post("/", (req, res) => {
  const postBody = req.body;
  db.insert(postBody)
    .then(response => {
      res.status(201).json({ success: true, response });
    })
    .catch(err => console.error(err));
});

module.exports = server;
