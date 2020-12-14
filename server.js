var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// app.use(routes);

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// var routes = require("filename");

require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js")(app);



db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
