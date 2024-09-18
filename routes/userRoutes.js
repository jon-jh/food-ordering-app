/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

//Put all user routing here

router.get('/', (req, res) => {
  res.render('users');
}); 

//test ignore 
router.get("/new", (req, res) => {
  //console.log('rendering new');
  res.render('newuser');
});

//New user login info will be sent here
router.post("/new", (req, res) => {
  const {phoneNumber, userName} = req.body;
  console.log(req.body);
});





//make a checkout route
//create and update to database route


module.exports = router;