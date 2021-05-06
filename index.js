var express = require("express");
var app = express();
const bmi = require("./src/bmi-calculate");

app.get("/", bmi.bmiCalculator);

app.listen(3001);
