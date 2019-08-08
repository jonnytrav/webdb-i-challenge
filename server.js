const express = require("express");

const accountsDB = require("./accountsDB");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  accountsDB
    .find()
    .then(response => {
      res.status(200).json({ success: true, response });
      //   console.log(response);
    })
    .catch(err => {
      res.status(400).json({ success: false, err });
    });
});

server.get("/:id", (req, res) => {
  const { id } = req.params;
  accountsDB
    .findById(id)
    .then(response => {
      res.status(200).json({ success: true, response });
    })
    .catch(err => {
      res.status(400).json({ success: false, err });
    });
});

server.post("/", (req, res) => {
  const postBody = req.body;
  accountsDB
    .insert(postBody)
    .then(response => {
      res.status(201).json({ success: true, response });
    })
    .catch(err => {
      res.status(400).json({ success: false, err });
    });
});

server.put("/:id", (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  accountsDB
    .update(id, newInfo)
    .then(response => {
      res.status(201).json({ success: true, response });
    })
    .catch(err => {
      res.status(400).json({ success: false, err });
    });
});

module.exports = server;
