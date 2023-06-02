//Server.js file
//this imports moduales from our libraries
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
//imports validation code from the validation.js file
const { signupValidation, loginValidation } = require("./validation.js");

// initiating the express app
const app = express();
//mout middlewear
//Middleware functions in Express.js are functions that are executed
//in the request-response cycle and can modify or handle the request and response objects.
app.use(express.json()); //enables parsing of json data in the request body
app.use(bodyParser.json()); //enables parson in various formats
app.use(
  bodyParser.urlencoded({
    extended: true, //configured to process URL data
  })
);
app.use(cors());
//setsup routes
app.get("/", (req, res) => {
  res.send("Node js file upload rest apis");
});
//this is the route to the signupValidation page.
//if any part of the vaidation fails "next" will send it down to Handling Error
app.post("/register", signupValidation, (req, res, next) => {
  // your registration code
});
//same thing as above only difference is this is with the loginValidation
app.post("/login", loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  //this handles everything not caught in the other function
  //thissets up the response in the case of failure
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(3000, () => console.log("Server is running on port 3000"));
