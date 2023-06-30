const route = require("express").Router();
const userContoller = require("../controllers/user.controller");

route.get("/", userContoller.soma);

module.exports = route;
