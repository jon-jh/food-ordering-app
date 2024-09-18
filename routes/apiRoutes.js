/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/users");

router.get("/menus", (req, res) => {
  userQueries
    .getMenu()
    .then((menus) => {
      res.json({ menus });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/users", (req, res) => {
  userQueries
    .getUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/orders", (req, res) => {
  
  userQueries
    .getOrders()
    .then((orders) => {
      res.json({ orders});
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
router.get("/orders:phonenumber", (req, res) => {
  
  userQueries
    .getOrdersByPhoneNumber(req.params.phonenumber)
    .then((orders) => {
      res.json({orders});
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/users", (req, res) => {
  userQueries
    .getUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });

    
});

module.exports = router;
