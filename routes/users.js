const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req,res) =>{
  res.render('register');
})

// Login
router.get('/login', (req,res) =>{
  res.render('login');
})

// Register User
router.post('/register', (req,res) => {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

   // Validation
   req.checkBody('name', 'Name is required').notEmpty();
   req.checkBody('email', 'Email is required').notEmpty();
   req.checkBody('username', 'Username is required').notEmpty();
   req.checkBody('password', 'Password is required').notEmpty();

   const errors = req.validationErrors();

   if(errors){
     res.render('register', {errors: errors});
   } else {
     console.log('YES');
   }
})



module.exports = router;
