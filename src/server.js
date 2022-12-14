const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");

// Initializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
// Middlewares
app.use(express.urlencoded({ extended: false }));

// Global variables

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Static files
app.use(express.static(path.join(__dirname, "public",)));

// Exports
module.exports = app;