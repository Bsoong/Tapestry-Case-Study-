const express = require("express");
const infoRoutes = require("./info");
const router = express.Router();
const app = express()

router.get("/countries", async(req, res) => {
    try{
      res.render("./templates/countries", {title: "Country List"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});

router.get("/goal", async(req, res) => {
    try{
      res.render("./templates/Goal", {title: "Our Goal"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});

router.get("/countries/HudsonYards", async(req, res) => {
    try{
      res.render("./templates/HudsonYards", {title: "Hudson Yards Page"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});

router.get("/countries/HongKong", async(req, res) => {
    try{
      res.render("./templates/HongKong", {title: "Hong Kong Page"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});

router.get("/TTalk", async(req, res) => {
    try{
      res.render("./templates/TTalk", {title: "Tapestry Talk"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});

module.exports = router;
