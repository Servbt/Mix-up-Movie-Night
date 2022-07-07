var button = document.querySelector("#heroButton");
var searchText = document.querySelector("#search-input");

var searchHandle = function (event){
    event.preventDefault();
    var search= searchText.value.trim()
    console.log(search);
    console.log("working");
    getOMDB(search)
}




// var apiUrl = "a7b45c21"

var getOMDB = function (search) {
    var omdbLink = `http://www.omdbapi.com/?t=${search}&apikey=a7b45c21`
    fetch(omdbLink)
    .then(function (response) {
        console.log(response);
      return response.json();
    })
    .then(function (data) {
        console.log(data)
        
    })};




button.addEventListener('click', searchHandle);



