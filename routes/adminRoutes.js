/*
 * All routes for Admin are defined here
 * Since this file is loaded in server.js into /admin,
 *   these routes are mounted onto /admin
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

// Download the helper library from https://www.twilio.com/docs/node/install
// Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
//and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const userQueries = require("../db/queries/users");
const fromNumber = process.env.FROM_NUMBER;
const toNumber = process.env.TO_NUMBER;
const createMessage = (phoneNumber,message) => {
  client.messages.create({
    body: message,
    from: fromNumber,
    to: phoneNumber,
  }).then((message) => console.log(message.body));
}

router.get('/admin', (req, res) => {
  res.render('admin');
});

// ToDo: add status changer will req status from the form submit
router.post('/admin', (req, res) => {
  res.send('Status change functionality to be implemented');
});

//change the order status to cancelled
router.post('/admin/cancel', (req, res) => {
  const {phoneNumber} = req.body
  //console.log("req data: ",req);
  
  createMessage(phoneNumber, 'Order canceled');
  // userQueries.changeOrderStatus(order_id, 'canceled', menu_id)
  // .then((result) => {
  //   createMessage(phoneNumber, 'Order canceled');
  // })
});

//change the order status to processing when any of the confirm buttons is clicked
router.post('/admin/processing', (req, res) => {

});

module.exports = router;