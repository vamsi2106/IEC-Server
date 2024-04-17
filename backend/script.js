const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

var corsOptions = {
  origin: "http://localhost:8080"
};


app.use(cors());
app.use(express.urlencoded({ extended: true }));
initRoutes(app);


let port = 8080;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});