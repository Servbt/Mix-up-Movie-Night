$(document).ready(function () {
  //var button = document.querySelector("#heroButton");
  //var searchText = document.querySelector("#search-input");
  var tileTags = document.querySelectorAll(".tile .box");

  /*   var movieGenres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Superhero",
    "Thriller",
    "War",
  ]; */
  var action = ["Mission Impossible", "GI Joe", "Taken", "Batman"];
  var adventure = ["Uncharted", "Alice in Wonderland", "Heart of the Sea", "Troy"];
  var animation = ["Madagascar", "Finding Nemo", "Minions", "Despicable Me"];
  var comedy = ["Home Alone", "21 Jump Street", "Ghostbusters"];

  $(tileTags).each(function () {
    $(this).click(function () {
      // console.log(this.find('.title').text())
      var genreClicked = $(this).find(".title").text();
      console.log(genreClicked);
      /* console.log("this was clicked" + $(this).text() + index) */
      genreClick(genreClicked);
    });
  });

  // GENRE CLICK EVENT //
  var genreClick = function (genre) {
    console.log("this was clicked" + genre);

    if (genre === "Action") {
      var random = Math.floor(Math.random() * action.length);
      var randomAction = action[random];
      getOMDB(randomAction);
    }
    if (genre === "Adventure") {
      var random = Math.floor(Math.random() * adventure.length);
      var randomAdventure = adventure[random];
      getOMDB(randomAdventure);
    }
    if (genre === "Animation") {
      var random = Math.floor(Math.random() * animation.length);
      var randomAnimation = animation[random];
      getOMDB(randomAnimation);
    }
  };

  /*   $("#heroButton").click(function () {
    console.log("this was clicked");
    for (var i = 0; i < movieGenres.length; i++) {
      console.log(movieGenres[i]);

      for (var j = 0; j < tileTags.length; j++) {
        $(tileTags[j].children[0]).text(movieGenres[i].genre);
        console.log(tileTags[j].children[0]);
      }
    }
    getOMDB("Action");
  }); */

  // ACCORDIAN //
  //var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances

  // MOVIES //
  var getOMDB = function (search) {
    var omdbLink = `http://www.omdbapi.com/?t=${search}&apikey=a7b45c21`;
    fetch(omdbLink)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };

  /* button.addEventListener('click', searchHandle); */

  var chooseNonAlcoholic = true;
  var chooseOrdinaryDrink = true;
  var chooseFancyCocktails = true;

  // GATHERING DRINK OPTIONS
  function drinkOptions() {
    if (chooseNonAlcoholic) {
      var urlNonAlcoholic =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
      fetch(urlNonAlcoholic)
        .then(function (response) {
          return response.json();
        })
        .then(function (nonAlcoholicDrinks) {
          var random = Math.floor(
            Math.random() * nonAlcoholicDrinks.drinks.length
          );
          var randomDrink = nonAlcoholicDrinks.drinks[random];
          console.log(random, randomDrink);
          console.log(nonAlcoholicDrinks);
        });
    } else if (chooseOrdinaryDrink) {
      var urlOrdinaryDrinks =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      fetch(urlOrdinaryDrinks)
        .then(function (response) {
          return response.json();
        })
        .then(function (ordinaryDrinks) {
          var random = Math.floor(Math.random() * ordinaryDrinks.drinks.length);
          var randomDrink = ordinaryDrinks.drinks[random];
          console.log(random, randomDrink);
          console.log(ordinaryDrinks);
        });
    } else if (chooseFancyCocktails) {
      var urlFancyDrinks =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
      fetch(urlFancyDrinks)
        .then(function (response) {
          return response.json();
        })
        .then(function (fancyDrinks) {
          var random = Math.floor(Math.random() * fancyDrinks.drinks.length);
          var randomDrink = fancyDrinks.drinks[random];
          console.log(random, randomDrink);
          console.log();
          console.log(fancyDrinks);
        });
    }
  }
  drinkOptions();
});
