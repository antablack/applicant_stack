const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const aplication_stack = require("./applicant_stack");


jsonParser = bodyParser.json();

var urlencodedparser = bodyParser.urlencoded({extended: false});


app.listen(3500, function () {
    console.log("runnig aplication in port: " + 3500);
    app.use(urlencodedparser);
    app.get("/applicant_stack", aplication_stack);
})




