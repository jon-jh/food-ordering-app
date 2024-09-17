/**
 * @fileoverview Routes for menus.
 * @description All routes for menus are defined here. Since this file is loaded in server.js into /menus,
 * these routes are mounted onto /menus.
 * @see {@link https://expressjs.com/en/guide/using-middleware.html#middleware.router|Express Middleware Router}
 */

 /**
 * GET /menus
 * Renders the menus page.
 * @name GET/menus
 * @function
 * @memberof module:routes/menus
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
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
  res.render('menus');
}); 





module.exports = router;
