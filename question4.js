
//validation.js
const { check } = require('express-validator');
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]


//Server.js file
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
app.listen(3000,() => console.log('Server is running on port 3000'));