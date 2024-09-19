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
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// const createMessage = () => {
//   client.messages.create({
//     body: "This is the ship that made the Kessel Run in fourteen parsecs?",
//     from: "+13437778496",
//     to: "+13437778496",
//   }).then((message) => console.log(message.body));
// }

router.get('/admin', (req, res) => {
  //createMessage();
  res.render('admin');
});

// ToDo: add status changer will req status from the form submit
router.post('/admin', (req, res) => {
  res.send('Status change functionality to be implemented');
});

module.exports = router;