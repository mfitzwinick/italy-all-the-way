var path = require("path");

module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/travel", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/italytravel.html"));
  });


  app.get("/italyhome", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/italyhome.html"));
  });

};
