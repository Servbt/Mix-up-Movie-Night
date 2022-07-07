var button = document.querySelector("#heroButton");
var searchText = document.querySelector("#search-input");

var searchHandle = function (event){
    event.preventDefault();
    var search= searchText.value.trim()
    console.log(search);
    console.log("working");
}
button.addEventListener('click', searchHandle);


// GATHERING DRINK OPTIONS 
function drinkOptions() { 
    if (chooseNonAlcoholic) { 
        var urlNonAlcoholic = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    fetch(urldrinkies)
        .then(function (response) { 
            return response.json();     
    })
        .then(function (data) { 
           console.log(data)
       })
    } else if (chooseOrdinaryDrink) { 
        var urlOrdinaryDrinks = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
        fetch(urldrinkies)
            .then(function (response) { 
                return response.json();     
        })
            .then(function (data) { 
               console.log(data)
            })
    } else if (chooseFancyCocktails) { 
        var urlFancyDrinks = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        fetch(urldrinkies)
            .then(function (response) { 
                return response.json();     
        })
            .then(function (data) { 
               console.log(data)
           })
    }
       
}
