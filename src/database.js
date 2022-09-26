const mongoose = require("mongoose");

//Set up default mongoose connection
const {MONGODB_HOST, MONGODB_DATABASE} = process.env;
const mongoDB = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("database connection established"))
  .catch((err) => console.log("connection error: " + err.message));

//Get the default connection
const db = mongoose.connection;
module.exports = db;