const express = require("express");
const path = require("path");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: false }));
// Global variables

// Routes
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

// Static files
app.use(express.static(path.join(__dirname, "static")));

// Exports 
module.exports = app;