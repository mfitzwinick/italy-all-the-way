var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/hotels", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/hotels.html"));
  });

  app.get("/sightseeing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/sightseeing.html"));
  });

  app.get("/restaurants", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/restaurants.html"));
  });

  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });
  app.get("/testing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });

};
