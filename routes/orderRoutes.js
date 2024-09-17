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

const express = require('express');
const router  = express.Router();



router.get('/', (req, res) => {
  userQueries.getOrders().then((users) => {
    res.json({users});
  })
  .catch((err) => {
    res.status(500).json({ error: err.message });
  });
}); 



// router.post('/user', (req, res)=> {
  
// });

// router.post ('/order', (req,res) => {

// });

// router.get('/order:phonenumber', (req,res) => {

// });

// router.get('/admin', (req, res) => {

// });
module.exports = router;
