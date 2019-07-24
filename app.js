const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");
const static = express.static(__dirname + "/public");
const express_handlebars = require("express-handlebars");

app.use('/public', static);
app.use(bodyParser.json());
configRoutes(app);

app.engine("handlebars", express_handlebars({
  defaultLayout: "./main" ,
  partialsDir:"./views/templates/partials",
  }));

app.set("view engine", "handlebars");


app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});
