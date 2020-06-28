const express = require("express");
const routes = express();
let db;

if (process.env.NODE_ENV === "testing") {
  db = require("../tests/models/descriptions");
} else {
  db = require("../models/descriptions");
}

routes.use(express.Router());

routes.get("/:product_id", (req, res) => {
  let { product_id } = req.params;
});

module.exports = routes;
