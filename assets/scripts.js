console.log("please work");

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