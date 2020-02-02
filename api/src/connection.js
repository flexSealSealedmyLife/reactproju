// connection.js
const mongoose = require('mongoose');
const User = require('./User');

const connection = 'mongodb://localhost:27017';

const connectDb = () => {
  return mongoose
    .connect(connection)
    .then(() =>
      console.log('database succesfully connected')
    )
    .catch(err => console.log(err));
};

module.exports = connectDb;
