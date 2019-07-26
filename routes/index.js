const express = require("express");
const infoRoutes = require("./info");
const createRoutes = require("./create")
const router = express.Router();
const app = express()
//const userRoutes = require("./users");

const constructorMethod = app => {
  app.use("/info", infoRoutes);
  app.use("/create", createRoutes);
  app.use("*", (req, res) => {
      res.render("./templates/index", {title: "Tapestry Event"});
  });
};




module.exports = constructorMethod, router;
