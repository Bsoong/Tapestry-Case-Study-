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


module.exports = router;
