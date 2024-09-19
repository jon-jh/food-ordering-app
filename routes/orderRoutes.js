/**
 * Express router providing user related routes.
 * @module routes/users
 * @requires express
 */

/**
 * Route serving user page.
 * @name get/
 * @function
 * @memberof module:routes/users
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { render } = require('ejs');
const express = require('express');
const router  = express.Router();
const userQueries = require("../db/queries/users");




//redirects to the newpage for now
router.get('/order', (req, res) => {
  res.redirect('/new')
}); 



//handle post for orders to add them to the db
router.post('/order', (req,res) => {
  const {phoneNumber, orders} = req.body;
  userQueries.addOrder(phoneNumber, orders).then((result) => {
    console.log(result);
  })



})


//test ignore 
router.get("/new", (req, res) => {
  //console.log('rendering new');
  res.render('formTest');
});


//save order to data base after checkout 


module.exports = router;
