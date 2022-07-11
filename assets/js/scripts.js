$(document).ready(function () {
  //var button = document.querySelector("#heroButton");
  //var searchText = document.querySelector("#search-input");
  var tileTags = document.querySelectorAll(".tile .box");

  /*   var movieGenres = [
    "Action",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Horror",
    "Family",
    "Fantasy",
    "Film Noir",
    "History",
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
    var action = ["Mission Impossible", "GI Joe", "Taken", "Batman", "Avengers", "The Accountant", "The King's Man", "Godzilla vs. Kong", "John Wick", "Rogue One: A Star Wars Story", "Jaws", "Troy", "Captain Marvel", "Jumanji", "Kong: Skull Island", "Raiders of the Lost Ark", "Indiana Jones and the Temple of Doom", "War of the Worlds", "Uncharted", "In the Heart of the Sea", "Jurassic Park", "Hook", "Oceans 11", "Oceans 12", "Oceans 13", "Pacific Rim", "Spiderman into the Spiderverse", "Tower Heist", "The Hunt", "The Princess Bride", "Army of the Dead"];
    
    var animation = ["Alice in Wonderland", "Madagascar", "Finding Nemo", "Minions", "Despicable Me", "The Adventures of Tintin", "Finding Dory", "Sprited Away", "Onward", "Treasure Planet", "Hotel Transilvania", "Soul", "9", "Monster House", "The Incredibles", "Up", "Happy Feet", "Wall-E", "Zootopia", "Mega Mind", "Robots", "Bee Movie", "Cloudy with a Chance of Meatballs", "Lego Movie", "the Lego Batman Movie", "Astro Boy", "Chicken Little", "Chicken Run", "My Neighbor Totoro", "Howl's Moving Castle", "Princess Mononoke", "Kiki's Delivery Service", "Ponyo", "Castle in the Sky", "The Book of Life", "Coco", "Spiderman into the Spiderverse"];
    
    var comedy = ["Home Alone", "21 Jump Street", "Ghostbusters", "Thor: Ragnarok", "22 Jump Street", "Deadpool", "Mean Girls", "The Hangover", "Superbad", "Step Brothers", "Idiocracy", "Game Night", "What We Do In The Shadows", "Horrible Bosses", "We're the Millers", "Tropic Thunder", "Murder Mystery", "Destination Wedding", "The Proposal", "Shrek", "Forgetting Sarah Marshall", "Get Him to the Greek", "Accepted", "Galaxy Quest", "Monty Python and the Holy Grail", "Spaceballs", "The Babysitter", "The Princess Bride", "The Rocky Horror Picture Show"];

    var horror = ["Alien", "Funny Games", "Fresh", "Raw", "Run", "The Night House", "Us", "Vivarium", "The Conjuring", "Midsommar", "Ready or Not", "The Babysitter", "Hereditary", "It", "It Chapter Two", "1408", "The Orphanage", "Cloverfield", "Oxygen", "Jennifer's Body", "The Hunt", "The Rocky Horror Picture Show", "Run", "Hush", "The Perfection", "Stoker", "One Hour Photo", "The Strangers", "Mama", "Pan's Labyrinth", "The Babadook", "The Witch", "Blair Witch", "The Ritual", "The Last Song", "Devil", "Insidious", "Paranormal Activity", "It Follows", "The Rental", "Army of the Dead", "Clinic", "Let Me In", "Seven", "Blood Red Sky", "Sweetheart", "The Mist", "Don't Look Up"]

    var drama = []
    
    var fantasy = []
    
    var musical = []
    
    var sports = []
        

  /* LOOP THROUGH TILES + GET GENRE FROM CLICK */
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

    /* RANDOM MOVIE GENERATOR + CALL API FUNCTION */
    if (genre === "Action") {
      var random = Math.floor(Math.random() * action.length);
      var randomAction = action[random];
      getOMDB(randomAction);
    }
    if (genre === "Animation") {
      var random = Math.floor(Math.random() * animation.length);
      var randomAnimation = animation[random];
      getOMDB(randomAnimation);
    }
    if (genre === "Comedy") {
      var random = Math.floor(Math.random() * comedy.length);
      var randomComedy = comedy[random];
      getOMDB(randomComedy);
    }
    if (genre === "Horror") {
      var random = Math.floor(Math.random() * horror.length);
      var randomHorror = horror[random];
      getOMDB(randomHorror);
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
