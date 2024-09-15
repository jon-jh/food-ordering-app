/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('users');
}); 

router.post('/user', (req, res)=> {

});

router.post ('/order', (req,res) => {

});

router.get('/order:phonenumber', (req,res) => {

});

router.get('/admin', (req, res) => {

});
module.exports = router;
