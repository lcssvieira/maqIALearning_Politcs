const express = require("express");
const bodyparser = require("body-parser");
const consign = require("consign");

var server = express();
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: false}));
server.use(express.static('./app/public'));


consign().include("app/routes")
.then('app/helper.js')
.then('config/database/mongodb.js')
.then("app/controllers")
.then("app/models")
.into(server);

module.exports = server;

