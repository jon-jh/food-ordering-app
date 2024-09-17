/**
 * @file server.js
 * @description Main server file for the food-ordering-app. Configures and starts the Express server, sets up middleware, and mounts routes.
 *
 * @requires dotenv - Loads environment variables from a .env file into process.env.
 * @requires express - Fast, unopinionated, minimalist web framework for Node.js.
 * @requires morgan - HTTP request logger middleware for Node.js.
 * @requires path - Node.js path module.
 * @requires ./lib/sass-middleware - Custom middleware for compiling Sass/SCSS files.
 * @requires ./routes/users-api - API routes for user-related operations.
 * @requires ./routes/menus-api - API routes for menu-related operations.
 * @requires ./routes/widgets-api - API routes for widget-related operations.
 * @requires ./routes/users - Routes for user-related pages.
 * @requires ./routes/menus - Routes for menu-related pages.
 *
 * @constant {number} PORT - The port number on which the server listens. Defaults to 8080 if not specified in environment variables.
 * @constant {object} app - The Express application instance.
 *
 * @function
 * @name app.get('/')
 * @description Route handler for the home page. Renders the index view.
 *
 * @function
 * @name app.listen
 * @description Starts the Express server and listens on the specified port.
 *
 * @middleware
 * @name morgan
 * @description HTTP request logger middleware configured in 'dev' mode.
 *
 * @middleware
 * @name express.urlencoded
 * @description Middleware to parse URL-encoded bodies.
 *
 * @middleware
 * @name sassMiddleware
 * @description Custom middleware to compile Sass/SCSS files.
 *
 * @middleware
 * @name express.static
 * @description Middleware to serve static files from the 'public' and 'docs' directories.
 *
 * @middleware
 * @name /api/users
 * @description Mounts user API routes.
 *
 * @middleware
 * @name /api/menus
 * @description Mounts menu API routes.
 *
 * @middleware
 * @name /api/widgets
 * @description Mounts widget API routes.
 *
 * @middleware
 * @name /users
 * @description Mounts user-related page routes.
 *
 * @middleware
 * @name /menus
 * @description Mounts menu-related page routes.
 */
// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'images')));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const menusRoutes = require('./routes/menus');
const apiRoutes = require("./routes/apiRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`

app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
app.use('/menus', menusRoutes);
app.use('/api', apiRoutes)
app.use(adminRoutes);//Route to admin here
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// Pages - There are only 2 pages, so I just put it right here.

app.get('/', (req, res) => {
  res.render('index');
});


// app.get('/admin', (req, res) => {
//   res.render('admin');
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
