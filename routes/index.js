const express = require('express');
const router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated,  (req,res) =>{
  res.render('index');
})

// pass this function as an argument in any of the routes
// you want the user to be logged in
function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  } else {
    req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}

module.exports = router;
