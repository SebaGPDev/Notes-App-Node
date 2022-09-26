require('dotenv').config();
const app = require("./server");
const db = require("./database");

app.listen(app.get("port"), () => {
  console.log("listening on http://localhost:3000");
});