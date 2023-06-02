//Question 5
//*when you see require() its for activating a modual
//with that being said this is targeting the msql modual
var mysql = require("mysql");
//This here is trying to establish a connection to the mysql database
var connection = mysql.createConnection({
  host: "localhost", //This tells you the name of the host/ web location
  user: "your username", //you would insert you username to acces the database
  password: "your password", //you would insert you password to the database
  database: "your database name", // you would insert the name of your database
});
//this function is written for the event your request/ or inserted information is wrong

connection.connect(function (error) {
  //if theres a problem the functions wants the server to log error to the console. *one thing i would change here to make this better i would specify the error so its easier for the person trying to acces this to know what the probem is

  if (!!error) {
    console.log(error);
    //if there is no error we want to tell the user "Connected"
  } else {
    console.log("Connected!:)");
  }
});
module.exports = connection;
//module.exports is a way to import waterevr object, function, etc.
//This allows the code to be accessable to those who download the moduales
