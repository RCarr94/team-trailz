// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Trail = require('./models/trail');

// Local variables will come in handy for holding retrieved documents
let user, trail;
let users, trails;

