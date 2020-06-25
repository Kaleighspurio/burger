const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// middleware that is needed to use POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this is needed to use handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
