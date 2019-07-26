const express = require("express");
const infoRoutes = require("./info");
const createRoutes = require("./create")
const router = express.Router();
const app = express();

router.get("/EmployeeSpotlight", async(req, res) => {
    try{
      res.render("./templates/createSpotlight", {title: "Add a Spotlight!"});
    } catch(e) {
      console.log(e);
      res.status(400);
    }
});


module.exports = router;
