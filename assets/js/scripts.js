var button = document.querySelector("#heroButton");
var searchText = document.querySelector("#search-input");


// GET STARTED BUTTON EVENT //
var searchHandle = function (event){
    event.preventDefault();
    var search= searchText.value.trim()
    console.log(search);
    console.log("working");
    getOMDB(search)
}



// ACCORDIAN // 
//var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances



// MOVIES // 
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

var chooseNonAlcoholic = true;
var chooseOrdinaryDrink = true;
var chooseFancyCocktails= true;

// GATHERING DRINK OPTIONS 
function drinkOptions() { 
    if (chooseNonAlcoholic) { 
        var urlNonAlcoholic = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
    fetch(urlNonAlcoholic)
        .then(function (response) { 
            return response.json();     
    })
        .then(function (nonAlcoholicDrinks) { 
            var random = Math.floor(Math.random() * nonAlcoholicDrinks.drinks.length);
            var randomDrink = nonAlcoholicDrinks.drinks[random];
           console.log(random, randomDrink)
           console.log(nonAlcoholicDrinks)

       })
    } else if (chooseOrdinaryDrink) { 
        var urlOrdinaryDrinks = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
        fetch(urlOrdinaryDrinks)
            .then(function (response) { 
                return response.json();     
        })
            .then(function (ordinaryDrinks) { 
                var random = Math.floor(Math.random() * ordinaryDrinks.drinks.length);
                var randomDrink = ordinaryDrinks.drinks[random];
                console.log(random, randomDrink);
                console.log(ordinaryDrinks)
            })
    } else if (chooseFancyCocktails) { 
        var urlFancyDrinks = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
        fetch(urlFancyDrinks)
            .then(function (response) { 
                return response.json();     
        })
            .then(function (fancyDrinks) { 
                var random = Math.floor(Math.random() * fancyDrinks.drinks.length);
                var randomDrink = fancyDrinks.drinks[random];
               console.log(random, randomDrink)
               console.log()
               console.log(fancyDrinks)
           })
    }
       
}
drinkOptions()