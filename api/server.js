// server.js
const User = require('./src/User');
const express = require('express');
const app = express();
const connectDb = require('./src/connection');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('./routes/users');

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);
// Routes
app.use('/users', users);

const PORT = 8080;

app.listen(PORT, function() {
  console.log(`Listening on ${PORT}`);

  connectDb()
    .then(() => {
      console.log('MongoDb connected');
    })
    .catch(err => console.log(err));
});
