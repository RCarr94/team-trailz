const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Always require and configure near the top
require('dotenv').config();
// Connect to the database (after the dotenv)
require('./config/database');

const userRouter = require('./routes/api/users')
const trailRouter = require('./routes/api/trails')

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(express.json());

if( process.env.NODE_ENV === 'production'){
  app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
  app.use(express.static(path.join(__dirname, 'build')));
}

// Check for a token on every request
app.use(require('./config/checkToken'));

// API routes here
app.use('/api/users', userRouter)
app.use('/api/trails', trailRouter);

// "Catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

