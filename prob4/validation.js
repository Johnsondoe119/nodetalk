//validation.js
//i am confused as to why check is in curly braces, have to look into that
//this is calling a builded in node moduale called express-validator
//*update: {check} is a function from the express validater
const { check } = require("express-validator");
//this express the signupValidation
exports.signupValidation = [
   //This makes it so the name portion is not left empty
  check("name", "Name is requied").not().isEmpty(),
  //this makes sure that you enter a valid email adress as well as takes out any periods before your @ sign
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
    //this makes sure you have the right amout of characters in the password feild
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
//this exports the login validation
exports.loginValidation = [
   //this makes sure that your email format is correct as well as removes all periods before the @ sign
  check("email", "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
    //this makes sure you have at least 6 charecters in the password feild
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];
