const cities = ["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Bari","Catania", "Verona", "Venice", "Messina", "Padua", "Trieste", "Brescia", "Parma", "Taranto", "Prato", "Modena", "Reggio Calabria", "Reggio Emilia", "Perugia", "Ravenna", "Livorno", "Cagliari", "Rimini", "Foggia", "Salerno", "Ferrara", "Latina", "Sassari", "Giugliano in Campania", "Monza", "Bergamo", "Syracuse", "Pescara", "Trento", "Forlì", "Vicenza", "Terni", "Bolzano", "Piacenza", "Novara", "Ancona", "Andria", "Arezzo", "Udine", "Cesena", "Pesaro", "Lecce", "Barletta", "Alessandria", "La Spezia", "Pisa", "Pistoia", "Guidonia Montecelio", "Lucca", "Catanzaro", "Brindisi", "Torre del Greco", "Treviso", "Busto Arsizio", "Como", "Marsala", "Grosseto", "Sesto San Giovanni", "Pozzuoli", "Varese", "Fiumicino", "Corigliano-Rossano", "Casoria", "Asti", "Cinisello Balsamo", "Caserta", "Gela", "Aprilia", "Ragusa", "Pavia", "Cremona", "Carpi", "Quartu Sant'Elena", "Lamezia Terme", "Altamura", "Imola", "L’Aquila", "Massa", "Trapani", "Viterbo", "Cosenza", "Potenza", "Castellammare di Stabia", "Afragola", "Vittoria", "Crotone", "Pomezia", "Vigevano", "Carrara", "Caltanissetta", "Viareggio","Fano","Savona","Matera","Olbia","Legnano","Acerra","Marano di Napoli","Benevento","Molfetta","Agrigento","Faenza","Cerignola","Moncalieri","Foligno","Manfredonia","Tivoli","Cuneo","Trani","Bisceglie","Bitonto","Bagheria","Anzio","Portici","Modica","Sanremo","Avellino","Teramo","Montesilvano","Siena","Gallarate","Velletri","Cava de' Tirreni","San Severo","Aversa","Ercolano","Civitavecchia","Acireale","Mazara del Vallo","Rovigo","Pordenone","Battipaglia","Rho","Chieti","Scafati","Scandicci","Sondrio"]
var unirest = require("unirest");
const db = require("../../../models");
var throttle = require("throttle-async")
//const db = require("../../../models");
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
        //}
    });
};

function yelpAttractions(location){

    var req = unirest("GET", "https://api.yelp.com/v3/businesses/search");

    req.query({
    	"term": "attractions",
    	"location": location
    });

    req.headers({
    	"Authorization": "Bearer 3PN8Oqpan3xhwu1aRSC2GunM30EbGmGuDYM2jg1oR_C1epg9dEhXIaZlrrj3EAz5496PwKMx_KcGyvGbm9_BNPEzSIHEoaOcmSjiTgnpUXBxDa7qRxTkkeCPXxfZX3Yx",
        "useQueryString": true,
        
    });


    req.end(function (res) {
        console.log(req.body)
        if (res.error) throw new Error(res.error);
        
        for(let i = 0; i < res.body.businesses.length; i++){
            if(res.body.businesses[i].categories[0] == undefined){
                db.attraction.create({
                    termId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    url: res.body.businesses[i].url,
                    location: location
                })
            }   
            else{
                db.attraction.create({
                    attractionId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    category: res.body.businesses[i].categories[0].title,
                    url: res.body.businesses[i].url,
                    location: location
                })

            }
        };
        
    	
    });
};
function yelpHotels(location){

    var req = unirest("GET", "https://api.yelp.com/v3/businesses/search");

    req.query({
    	"term": "hotels",
    	"location": location
    });

    req.headers({
    	"Authorization": "Bearer 3PN8Oqpan3xhwu1aRSC2GunM30EbGmGuDYM2jg1oR_C1epg9dEhXIaZlrrj3EAz5496PwKMx_KcGyvGbm9_BNPEzSIHEoaOcmSjiTgnpUXBxDa7qRxTkkeCPXxfZX3Yx",
        "useQueryString": true,
        
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        for(let i = 0; i < res.body.businesses.length; i++){
            if(res.body.businesses[i].categories[0] == undefined){
                db.hotel.create({
                    termId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    url: res.body.businesses[i].url,
                    location: location
                })
            }   
            else{
                db.hotel.create({
                    attractionId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    category: res.body.businesses[i].categories[0].title,
                    url: res.body.businesses[i].url,
                    location: location
                })

            }
        };
        
    	
    });
};
function yelpRestaurants(location){

    var req = unirest("GET", "https://api.yelp.com/v3/businesses/search");

    req.query({
    	"term": "restaurants",
    	"location": location
    });

    req.headers({
    	"Authorization": "Bearer 3PN8Oqpan3xhwu1aRSC2GunM30EbGmGuDYM2jg1oR_C1epg9dEhXIaZlrrj3EAz5496PwKMx_KcGyvGbm9_BNPEzSIHEoaOcmSjiTgnpUXBxDa7qRxTkkeCPXxfZX3Yx",
        "useQueryString": true,
        
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        for(let i = 0; i < res.body.businesses.length; i++){
            if(res.body.businesses[i].categories[0] == undefined){
                db.restaurant.create({
                    termId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    url: res.body.businesses[i].url,
                    price: res.body.businesses[i].price,
                    location: location
                })
            }   
            else{
                db.restaurant.create({
                    restaurantId: res.body.businesses[i].id,
                    name: res.body.businesses[i].name,
                    image: res.body.businesses[i].image_url,
                    rating: res.body.businesses[i].rating,
                    category: res.body.businesses[i].categories[0].title,
                    url: res.body.businesses[i].url,
                    price: res.body.businesses[i].price,
                    location: location
                })

            }
        };
        
    	
    });
};
console.log(cities.indexOf("Velletri"))
function buildDB(){
    let i = 129
    setInterval(() => {
        yelpAttractions(cities[i])
        yelpRestaurants(cities[i])
        yelpHotels(cities[i])
         i +=1
    }, 1500);
    if(i === 145){
        clearInterval();
    }
}


function tables(){
    db.restaurant.create({})
    db.attraction.create({})
    db.hotel.create({})
}

tables()











   










