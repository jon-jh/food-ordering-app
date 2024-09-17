/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/admin', (req, res) => {
  res.render('admin');
})
//To:Do add status changer will req status from the form submit
router.post('/admin', (req, res) =>{
  
})



module.exports = router;