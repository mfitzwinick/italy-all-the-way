
const favoriteStorage = JSON.parse(localStorage.getItem("favoriteStorage"));
if(favoriteStorage == undefined){
    var message = $("<h1>Please add some favorites.</h1>")
    document.body.append(message)
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
            if(favoriteStorage.includes(arr[i].restaurantId)){
                //display with same code as script.js
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
            if(favoriteStorage.includes(arr[i].attractionId)){
                //display with same code as script.js
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
            if(favoriteStorage.includes(arr[i].hotelId)){
                //display with same code as script.js
            }
        }   
    });
}