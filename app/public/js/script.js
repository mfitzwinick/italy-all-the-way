
const cities = ["Rome","Milan","Naples","Turin","Palermo","Genoa","Bologna","Florence","Bari","Catania", "Verona", "Venice", "Messina", "Padua", "Trieste", "Brescia", "Parma", "Taranto", "Prato", "Modena", "Reggio Calabria", "Reggio Emilia", "Perugia", "Ravenna", "Livorno", "Cagliari", "Rimini", "Foggia", "Salerno", "Ferrara", "Latina", "Sassari", "Giugliano in Campania", "Monza", "Bergamo", "Syracuse", "Pescara", "Trento", "Forlì", "Vicenza", "Terni", "Bolzano", "Piacenza", "Novara", "Ancona", "Andria", "Arezzo", "Udine", "Cesena", "Pesaro", "Lecce", "Barletta", "Alessandria", "La Spezia", "Pisa", "Pistoia", "Guidonia Montecelio", "Lucca", "Catanzaro", "Brindisi", "Torre del Greco", "Treviso", "Busto Arsizio", "Como", "Marsala", "Grosseto", "Sesto San Giovanni", "Pozzuoli", "Varese", "Fiumicino", "Corigliano-Rossano", "Casoria", "Asti", "Cinisello Balsamo", "Caserta", "Gela", "Aprilia", "Ragusa", "Pavia", "Cremona", "Carpi", "Quartu Sant'Elena", "Lamezia Terme", "Altamura", "Imola", "L’Aquila", "Massa", "Trapani", "Viterbo", "Cosenza", "Potenza", "Castellammare di Stabia", "Afragola", "Vittoria", "Crotone", "Pomezia", "Vigevano", "Carrara", "Caltanissetta", "Viareggio","Fano","Savona","Matera","Olbia","Legnano","Acerra","Marano di Napoli","Benevento","Molfetta","Agrigento","Faenza","Cerignola","Moncalieri","Foligno","Manfredonia","Tivoli","Cuneo","Trani","Bisceglie","Bitonto","Bagheria","Anzio","Portici","Modica","Sanremo","Avellino","Teramo","Montesilvano","Siena","Gallarate","Velletri","Cava de' Tirreni","San Severo","Aversa","Ercolano","Civitavecchia","Acireale","Mazara del Vallo","Rovigo","Pordenone","Battipaglia","Rho","Chieti","Scafati","Scandicci","Sondrio"]
function choices(){
    for(var j = 0; j < cities.length; j++){
        var option = $("<option>")
        option.html(cities[j])
        $("#mylist").append(option)
    }
}
choices();



 $("#searchBtn2").on("click", (event) => {
    if($("#citySearch").val() == ""){
        
        alert("please enter a city")
    }
    else{
        event.preventDefault();
        $("#attractions").html("")
        $("#hotels").html("")
        $("#restaurants").html("")        
         
        const queryURL1 = "https://powerful-forest-82975.herokuapp.com/api/restaurants"
        $.ajax({
            header: origin,
            url: queryURL1,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){
                if(arr[i].location.toLowerCase() == $("#citySearch").val().toLowerCase()){
                    const card = $(`<div class="container" id="sub1">
                    <h4> Restaurants <button class="addfav"><i class="fas fa-star" id="favorite restaurant/`+arr[i].id+`"></i></button></h4>
                    <div class="card">
                      <div class="card-body">
                        <h2 class="">`+arr[i].name+`</h2>
                        <img src="`+arr[i].image+`" width = 200px></img>
                        <p>Rating: `+ arr[i].rating+`/5</p>
                        <p>Price: `+arr[i].price+`</p>
                        <br>
                        <a target = "_blank"href = "`+ arr[i].url+`"><button id="buttonLink"><i class="hotelLink">View more details</i></button></a>
                      </div>
                    </div>           
                  </div>`)
                $("#restaurants").append(card)
                }
            }   
        });
        const queryURL2 = "https://powerful-forest-82975.herokuapp.com/api/attractions"
        $.ajax({
            header: origin,
            url: queryURL2,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){
                if(arr[i].location.toLowerCase() == $("#citySearch").val().toLowerCase()){
                    const card = $(`<div class="container" id="sub1">
                    <h4> Attractions <button class="addfav"><i class="fas fa-star" id="favorite attraction/`+arr[i].id+`"></i></button></h4>
                    <div class="card">
                      <div class="card-body">
                        <h2 class="">`+arr[i].name+`</h2>
                        <img src="`+arr[i].image+`" width = 200px></img>
                        <p>Category: `+arr[i].category+`</p>
                        <p>Rating: `+ arr[i].rating+`/5</p>
                        <br>
                        <a target = "_blank"href = "`+ arr[i].url+`"><button id="buttonLink"><i class="hotelLink">View more details</i></button></a>
                      </div>
                    </div>            
                  </div>`)
                $("#attractions").append(card)
                }
            }   
        });
        const queryURL3 = "https://powerful-forest-82975.herokuapp.com/api/hotels"
        $.ajax({
            header: origin,
            url: queryURL3,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){
                if(arr[i].location.toLowerCase() == $("#citySearch").val().toLowerCase()){
                    const card = $(`<div class="container" id="sub1">
                    <h4> Hotels<button class="addfav"><i class="fas fa-star" id="favorite hotel/`+arr[i].id+`"></i></button></h4>
                    <div class="card">
                      <div class="card-body">
                        <h2 class="">`+arr[i].name+`</h2>
                        <img src="`+arr[i].image+`" width = 200px></img>
                        <p>Rating: `+ arr[i].rating+`/5</p>
                        <br>
                        <a target = "_blank"href = "`+ arr[i].url+`"><button id="buttonLink"><i class="hotelLink">View more details</i></button></a>
                      </div>
                    </div>            
                  </div>`)
                $("#hotels").append(card)
                }
            }  
        });
        
    }
});

// const favoriteStorage = JSON.parse(localStorage.getItem("favoriteStorage"));




$(document).on("click",".addfav", (event) => {
    var favoriteStorage = JSON.parse(localStorage.getItem("favoriteStorage"));
    var favorites = []
    if (favoriteStorage != undefined){
        favorites = favoriteStorage
    }
    
   event.preventDefault();
    
    if(event.target.id.split(" ")[1] == null){
        alert("Please try again")
    }
    else{
        favorites.push(event.target.id.split(" ")[1])

        localStorage.setItem("favoriteStorage", JSON.stringify(favorites));

        
        
        alert("Added to Favorites!")
    }
    
    
    
});

function createMessage(){
    
    var userInfo = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        message: $("#location").val().trim()
    }
    var queryURL = "https://powerful-forest-82975.herokuapp.com/api/contacts/"
    $.ajax({
        header: origin,
        url: queryURL,
        method: "POST",
        data: userInfo
    })
    location.reload()

};

$("#submitBtn").on("click", (event)=>{
   console.log($("#email").val(),
   $("#name").val(),
   $("#location").val()) 
    createMessage()
})
