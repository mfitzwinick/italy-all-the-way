var unirest = require("unirest");
const db = require("../app/models");
// const connection = require("../app/config/connection");
// connection.query("")
function recipeSearch(){

    var req = unirest("GET", "https://edamam-recipe-search.p.rapidapi.com/search");

    req.query({
    	"q": "pizza"
    });

    req.headers({
    	"x-rapidapi-key": "dd467c12c8msh8283a300dcf3a54p105277jsn884040779b75",
    	"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    	"useQueryString": true
    });


    req.end(function (res) {
    	if (res.error) throw new Error(res.error);
       //for(let i = 0; i < res.body.hits.length; i++){
            console.log(res.body);
        //}
    });
};

function yelpSearch(){
    var unirest = require("unirest");

    var req = unirest("GET", "https://api.yelp.com/v3/businesses/search");

    req.query({
    	"term": "attractions",
    	"location": "Florence Italy"
    });

    req.headers({
    	"Authorization": "Bearer 3PN8Oqpan3xhwu1aRSC2GunM30EbGmGuDYM2jg1oR_C1epg9dEhXIaZlrrj3EAz5496PwKMx_KcGyvGbm9_BNPEzSIHEoaOcmSjiTgnpUXBxDa7qRxTkkeCPXxfZX3Yx",
    	"useQueryString": true
    });


    req.end(function (res) {
    	if (res.error) throw new Error(res.error);
        for(let i = 0; i < res.body.businesses.length; i++){
            console.log(res.body.businesses[i].categories);
        }
    	
    });
};

yelpSearch()


db.attraction.create({
    name:"test"
    
});