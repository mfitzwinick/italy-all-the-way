
var db = require("../../models");
const { Op } = require("sequelize");
module.exports = function(app) {

  app.get("/api/attractions", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.attraction.findAll({
        where: {
            category: {
                [Op.and]:{
                    [Op.not] :"Hotels"
                }
            }
        }
    }).then(function(response) {
      // We have access to the attractions as an argument inside of the callback function
      res.json(response);
    });
  });
  app.get("/api/hotels", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.hotel.findAll({
       
        
    }).then(function(response) {
      // We have access to the attractions as an argument inside of the callback function
      res.json(response);
    });
  });
  app.get("/api/restaurants", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.restaurant.findAll({

    }).then(function(response) {
      res.json(response);
    });
  });
  app.get("/api/contacts", function(req,res){
    db.contact.findAll({
      
    }).then(function(response) {
      res.json(response);
    });
  });
 

  // POST route for saving a new attraction
  app.post("/api/contacts/", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.contact.create({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    }).then(function(response) {
      // We have access to the new attraction as an argument inside of the callback function
      res.json(response);
    });
  });

  // DELETE route for deleting attractions. We can get the id of the attraction we want to delete from
  // PUT route for updating attractions. We can get the updated attraction from req.body
  app.put("/api/attractions", function(req, res) {

  });
};
