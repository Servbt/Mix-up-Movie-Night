

// var apiUrl = "a7b45c21"

var getOMDB = function () {
    var omdbLink = " http://www.omdbapi.com/?i=tt3896198&apikey=a7b45c21"
    fetch(omdbLink)
    .then(function (response) {
        console.log(response);
      return response.json();
    })
    .then(function (data) {
        console.log(data)
        
    })};

getOMDB();

var button = document.querySelector("#heroButton");
var searchText = document.querySelector("#search-input");

var searchHandle = function (event){
    event.preventDefault();
    var search= searchText.value.trim()
    console.log(search);
    console.log("working");
}





button.addEventListener('click', searchHandle);




