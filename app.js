const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const aplication_stack = require("./applicant_stack");


jsonParser = bodyParser.json();

var urlencodedparser = bodyParser.urlencoded({extended: false});


app.listen(3500, function () {
    console.log("runnig aplication in port: " + 3500);
  /*   app.use(jsonParser);
    app.use(urlencodedparser); */
    app.get("/applicant_stack",(req, res, next)=>{
        console.log("GET /applicant_stack");
        next();
    }, aplication_stack);
    app.post("/applicant_stack",(req, res, next)=>{
        console.log("POST /applicant_stack");
        next();
    }, aplication_stack);
})




