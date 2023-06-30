const route = require("express").Router();
const userContoller = require("../controllers/user.controller");

route.post("/", userContoller.create);
route.get("/", userContoller.findAll);

module.exports = route;
