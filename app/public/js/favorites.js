

function onLoad(){
    const favoriteStorage = JSON.parse(localStorage.getItem("favoriteStorage"));
    console.log(favoriteStorage)
    if(favoriteStorage == null || favoriteStorage.length == 0){
        console.log("test")
        var message = $("<h5>Please add some favorites</h5>")
        $(".favo").append(message)
    }
    else{

        const queryURL1 = "http://localhost:8080/api/restaurants"
        $.ajax({
            header: origin,
            url: queryURL1,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){

                for(let j = 0; j < favoriteStorage.length; j++){
                    if(favoriteStorage[j].split("/")[0] == "restaurant" && arr[i].id == favoriteStorage[j].split("/")[1]){
                        const card = $(`<div class="container" id="sub1">
                        <h4> Restaurants <button class="addfav"><i class="fas fa-times" id="favorite restaurant/`+arr[i].id+`"></i></button></h4>
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
            }   
        });
        const queryURL2 = "http://localhost:8080/api/attractions"
        $.ajax({
            header: origin,
            url: queryURL2,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < favoriteStorage.length; j++){
                    if(favoriteStorage[j].split("/")[0] == "attraction" &&arr[i].id == favoriteStorage[j].split("/")[1]){
                        const card = $(`<div class="container" id="sub1">
                        <h4> Attractions <button class="addfav"><i class="fas fa-times" id="favorite attraction/`+arr[i].id+`"></i></button></h4>
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
            }   
        });
        const queryURL3 = "http://localhost:8080/api/hotels"
        $.ajax({
            header: origin,
            url: queryURL3,
            method: "GET",
        }).then(function(response) {
            const arr = response.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < favoriteStorage.length; j++){
                    if(favoriteStorage[j].split("/")[0] == "hotel" && arr[i].id == favoriteStorage[j].split("/")[1]){
                        const card = $(`<div class="container" id="sub1">
                        <h4> Hotels <button class="addfav"><i class="fas fa-times" id="favorite hotel/`+arr[i].id+`"></i></button></h4>
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
            }   
        });
    }
}    
onLoad();
$(document).on("click",".addfav", (event) => {
    event.preventDefault()
    var favoriteStorage = JSON.parse(localStorage.getItem("favoriteStorage"));
    var favorites = []
    if (favoriteStorage != undefined){
        favorites = favoriteStorage
    }
        
    if(event.target.id.split(" ")[1] == null){
        alert("Please try again")
    }
    else{
        $("#attractions").html("")
        $("#hotels").html("")
        $("#restaurants").html("")

        let target = favorites.indexOf(event.target.id.split(" ")[1])
        favorites.splice(target, 1)

        localStorage.setItem("favoriteStorage", JSON.stringify(favorites));
        onLoad();

        
    }
    
    
    
});