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


//redirects to the orders api for now
router.get('/order', (req, res) => {
  res.redirect('api/orders')
}); 


//handle post for orders to add them to the db
router.post('/order', (req,res) => {
  const {} = req.body;
})



//save order to data base after checkout 


module.exports = router;
