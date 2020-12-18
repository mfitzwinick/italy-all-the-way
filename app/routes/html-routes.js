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
<<<<<<< HEAD
<<<<<<< HEAD

  app.get("/testing", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/backendTest.html"));
=======
  app.get("/favorites", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/favorites.html"));
>>>>>>> ad65815628724c4c531f907d857eb159e7f4e860
  });
=======
>>>>>>> 2e4f13cf604edec0bbc33cfee69ddeb74dc6efb5

};
