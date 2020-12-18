var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/travel", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/italytravel.html"));
  });


  app.get("/music", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/music.html"));
  });

  app.get("/favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/italyhome.html"));
  });

};
