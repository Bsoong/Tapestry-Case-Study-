const express = require("express");
const infoRoutes = require("./info");
const router = express.Router();
const app = express()
//const userRoutes = require("./users");

const constructorMethod = app => {
  app.use("/info", infoRoutes);
//  app.use("/users", userRoutes);
  app.use("*", (req, res) => {
      res.render("./templates/index", {title: "Tapestry Event"});
  });
};




module.exports = constructorMethod, router;
