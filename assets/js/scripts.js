// ONLOAD TRANSITION
window.onload = () => {
  //Needed for the transition element

  // ONLOAD FXN FOR WELCOME BANNER //
  var transitionEl = document.querySelector(".transition-el");

  setTimeout(() => {
    transitionEl.classList.remove("is-active");
  }, 2000);
};

$(document).ready(function () {
  //var button = document.querySelector("#heroButton");
  //var searchText = document.querySelector("#search-input");
  var tileTags = document.querySelectorAll(".tile .box");
  var hero1 = document.getElementById("hero1");
  var saveForLater = document.querySelector(".saveForLater");
  saveForLater.setAttribute("style", "display: none");
  var movieCont = document.createElement("div");
  var drinkCont = document.createElement("div");
  var chooseNonAlcoholic;
  var chooseOrdinaryDrink;
  var chooseFancyCocktails;

  var movieSelected;
  var drinkSelected;

  // LOOP THROUGH TILES TO PULL INFO //
  $(tileTags).each(function () {
    $(this).click(function () {
      // console.log(this.find('.title').text())
      var btnClicked = $(this).find(".title").text();
      console.log(btnClicked);
      /* console.log("this was clicked" + $(this).text() + index) */
      genreClick(btnClicked);
      drinkClicked(btnClicked);
    });
  });

  // MOVIE ARRAYS //
  var action = [
    "Mission Impossible",
    "Taken",
    "Batman",
    "Avengers",
    "The Accountant",
    "The King's Man",
    "Godzilla vs. Kong",
    "John Wick",
    "Rogue One: A Star Wars Story",
    "Jaws",
    "Troy",
    "Captain Marvel",
    "Jumanji",
    "Kong: Skull Island",
    "Raiders of the Lost Ark",
    "Indiana Jones and the Temple of Doom",
    "V for Vendetta",
    "War of the Worlds",
    "300",
    "Uncharted",
    "In the Heart of the Sea",
    "Jurassic Park",
    "Hook",
    "The Revenent",
    "Oceans 11",
    "Oceans 12",
    "Oceans 13",
    "Pacific Rim",
    "Spiderman into the Spiderverse",
    "Tower Heist",
    "The Hunt",
    "The Princess Bride",
    "Army of the Dead",
  ];

  var animation = [
    "Alice in Wonderland",
    "Madagascar",
    "Finding Nemo",
    "Minions",
    "Despicable Me",
    "The Adventures of Tintin",
    "Finding Dory",
    "Sprited Away",
    "Onward",
    "Treasure Planet",
    "Hotel Transilvania",
    "Soul",
    "9",
    "Monster House",
    "The Incredibles",
    "Up",
    "Happy Feet",
    "Wall-E",
    "Zootopia",
    "Mega Mind",
    "Robots",
    "Bee Movie",
    "Cloudy with a Chance of Meatballs",
    "Lego Movie",
    "the Lego Batman Movie",
    "Astro Boy",
    "Chicken Little",
    "Chicken Run",
    "My Neighbor Totoro",
    "Howl's Moving Castle",
    "Princess Mononoke",
    "Kiki's Delivery Service",
    "Ponyo",
    "Castle in the Sky",
    "The Book of Life",
    "Coco",
    "Spiderman into the Spiderverse",
  ];

  var comedy = [
    "Home Alone",
    "The Water Boy",
    "Happy Madison",
    "Knives Out",
    "Zoolander",
    "The Royal Tenenbaums",
    "21 Jump Street",
    "Ghostbusters",
    "Thor: Ragnarok",
    "22 Jump Street",
    "Jojo Rabbit",
    "Deadpool",
    "Mean Girls",
    "The Hangover",
    "Superbad",
    "Step Brothers",
    "Idiocracy",
    "Game Night",
    "What We Do In The Shadows",
    "Horrible Bosses",
    "We're the Millers",
    "Tropic Thunder",
    "Murder Mystery",
    "Destination Wedding",
    "The Proposal",
    "Shrek",
    "Forgetting Sarah Marshall",
    "Get Him to the Greek",
    "Accepted",
    "Galaxy Quest",
    "Monty Python and the Holy Grail",
    "Spaceballs",
    "The Babysitter",
    "The Princess Bride",
    "The Rocky Horror Picture Show",
  ];

  var horror = [
    "Alien",
    "Funny Games",
    "Lady in the Water",
    "Fresh",
    "We Need to Talk About Kevin",
    "Parasite",
    "Raw",
    "Run",
    "The Night House",
    "Us",
    "Vivarium",
    "The Conjuring",
    "Midsommar",
    "Melancholia",
    "Ready or Not",
    "The Babysitter",
    "Hereditary",
    "Black Swan",
    "Joker",
    "It",
    "It Chapter Two",
    "The Lovely Bones",
    "1408",
    "The Orphanage",
    "Donnie Darko",
    "Cloverfield",
    "Oxygen",
    "Jennifer's Body",
    "The Hunt",
    "The Rocky Horror Picture Show",
    "Run",
    "Hush",
    "The Predator",
    "The Perfection",
    "Stoker",
    "One Hour Photo",
    "The Road",
    "The Strangers",
    "Mama",
    "Pan's Labyrinth",
    "The Babadook",
    "The Witch",
    "Blair Witch",
    "The Ritual",
    "The Last Song",
    "Devil",
    "Insidious",
    "Paranormal Activity",
    "It Follows",
    "The Rental",
    "Army of the Dead",
    "Clinic",
    "Let Me In",
    "Seven",
    "Blood Red Sky",
    "Sweetheart",
    "The Mist",
    "Don't Look Up",
  ];

  var drama = [
    "Cake",
    "Beyond",
    "My Cousin Rachel",
    "We Need to Talk About Kevin",
    "High Rise",
    "Brain on Fire",
    "House of Gucci",
    "The Power of the dog",
    "The Goldfinch",
    "12 Strong",
    "Parasite",
    "Knives Out",
    "Hidden Figures",
    "Moonlight",
    "Moon",
    "Melancholia",
    "Eternal Sunshine of the Spotless Mind",
    "Whiplash",
    "Jojo Rabbit",
    "Gone Girl",
    "El Kamino",
    "Gatsby",
    "Joker",
    "Black Swan",
    "The Lovely Bones",
    "Django",
    "Arrival",
    "A Clockwork Orange",
    "Ex Machina",
    "Mr. Nobody",
    "V for Vendetta",
    "The Lobster",
    "Castaway",
    "1917",
    "The Revenant",
    "Life of Pi",
    "127 Hours",
    "The Road",
    "The Martian",
    "Braveheart",
    "Forest Gump",
  ];

  var fantasy = [
    "Arrival",
    "Edward Scissorhands",
    "Lady in the Water",
    "Inkheart",
    "The Dark Tower",
    "Venom",
    "The Age of Adelaide",
    "Justice League",
    "The Dark Knight Rises",
    "Ex Machina",
    "Mr. Nobody",
    "War of the Worlds",
    "Jumanji",
    "Eragon",
    "Dune",
    "Labyrinth",
    "Clash of the Titans",
    "Blade Runner",
    "A.I. Artificial Intelligence",
    "Eternal Sunshine of the Spotless Mind",
    "Melancholia",
  ];

  var musical = [
    "The Great Gatsby",
    "The Greatest Showman",
    "Moulin Rouge!",
    "Romeo + Juliet",
    "West Side Story",
    "Respect",
    "Cyrano",
    "Into the Woods",
    "Rocket Man",
    "Hamilton",
    "Bohemian Rhaspody",
    "A Star is Born",
    "Mamma Mia!",
    "La La Land",
  ];

  var sports = [
    "Invinsible",
    "Draft Day",
    "Water Boy",
    "American Wrestler",
    "Concussion",
    "Foxcatcher",
    "Cinderella Man",
    "The Express",
    "The Fighter",
    "Glory Road",
    "The Blind Side",
    "Coach Carter",
    "The Bleeder",
    "Friday N ight Lights",
    "Remember the Titans",
    "Million Dollar Baby",
  ];

  // MOVIE CLICK EVENT //
  var genreClick = function (genre) {
    console.log("this was clicked " + genre);

    // RANDOM MOVIE GENERATOR + CALL API FUNCTION //
    if (genre === "Action/Adventure") {
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
    if (genre === "Horror/Mystery") {
      var random = Math.floor(Math.random() * horror.length);
      var randomHorror = horror[random];
      getOMDB(randomHorror);
    }
    if (genre === "Drama") {
      var random = Math.floor(Math.random() * drama.length);
      var randomDrama = drama[random];
      getOMDB(randomDrama);
    }
    if (genre === "Fantasy/SciFi") {
      var random = Math.floor(Math.random() * fantasy.length);
      var randomFantasy = fantasy[random];
      getOMDB(randomFantasy);
    }
    if (genre === "Musical") {
      var random = Math.floor(Math.random() * musical.length);
      var randomMusical = musical[random];
      getOMDB(randomMusical);
    }
    if (genre === "Sports") {
      var random = Math.floor(Math.random() * sports.length);
      var randomSports = sports[random];
      getOMDB(randomSports);
    }
  };

  // MOVIE POSTER/INFO PULL //
  var getOMDB = function (search) {
    var omdbLink = `http://www.omdbapi.com/?t=${search}&apikey=a7b45c21`;
    fetch(omdbLink)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        saveForLater.setAttribute("style", "display: flex");
        displayMovieResult(data);
        movieSelected = data;
      });
  };

  /* button.addEventListener('click', searchHandle); */

  // DRINKS CLICK EVENT //
  var drinkClicked = function (drinksClicked) {
    console.log("this worked " + drinksClicked);
    if (drinksClicked === "Non Alcoholic Drinks") {
      chooseNonAlcoholic = true;
      drinkOptions1();
      console.log(chooseNonAlcoholic);
    }
    if (drinksClicked === "Ordinary Drinks") {
      chooseOrdinaryDrink = true;
      drinkOptions2();
    }
    if (drinksClicked === "Fancy Cocktail") {
      chooseFancyCocktails = true;
      drinkOptions3();
    }
  };

  // GATHERING DRINK OPTIONS //
  function drinkOptions1() {
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
          console.log(randomDrink);
          // this calls the function at bottom of page
          drinkSelected = randomDrink;
          saveForLater.setAttribute("style", "display: flex");
          displayDrinkResult(randomDrink);
        });
    }
  }

  function drinkOptions2() {
    if (chooseOrdinaryDrink) {
      var urlOrdinaryDrinks =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
      fetch(urlOrdinaryDrinks)
        .then(function (response) {
          return response.json();
        })
        .then(function (ordinaryDrinks) {
          var random = Math.floor(Math.random() * ordinaryDrinks.drinks.length);
          var randomDrink = ordinaryDrinks.drinks[random];

          console.log(randomDrink);
          drinkSelected = randomDrink;
          saveForLater.setAttribute("style", "display: flex");
          displayDrinkResult(randomDrink);
        });
    }
  }

  function drinkOptions3() {
    if (chooseFancyCocktails) {
      var urlFancyDrinks =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
      fetch(urlFancyDrinks)
        .then(function (response) {
          return response.json();
        })
        .then(function (fancyDrinks) {
          var random = Math.floor(Math.random() * fancyDrinks.drinks.length);
          var randomDrink = fancyDrinks.drinks[random];

          console.log(randomDrink);
          drinkSelected = randomDrink;
          saveForLater.setAttribute("style", "display: flex");
          displayDrinkResult(randomDrink);
        });
    }
  }

  function displayMovieResult(movie) {
    $(movieCont).empty();
    console.log(movie);
    //b/c this is in jQuery, .attr -> "src" -> movie.Poster is done without "" or $ because movie was already being passed so you just have to look at the Poster part
    $(".movieDivImg").attr("src", movie.Poster);
    $(".movieDivImg").attr("alt", movie.Title);
    $(".movieDivTitle").text(movie.Title);
    $(".movieDivDescription").text(movie.Plot);
    console.log(movie.Plot);
  }

  function displayDrinkResult(randomDrink) {
    $(drinkCont).empty();
    console.log(randomDrink);
    $(".drinkDivImg").attr("src", randomDrink.strDrinkThumb);
    $(".drinkDivImg").attr("alt", randomDrink.strDrink);
    $(".drinkDivTitle").text(randomDrink.strDrink);
  }

  $(".saveForLater").click(function () {
    console.log("button clicked");
    console.log(movieSelected);
    console.log(drinkSelected);

    //Create object to pair and store
    var setSavedPair = {
      movie: movieSelected,
      drink: drinkSelected,
    };
    console.log(setSavedPair);
    // Store as string in local storage
    localStorage.setItem("setSavedPair", JSON.stringify(setSavedPair));
  });
  // Get from storage and create an object

  function savedInfo(movieSelected, drinkSelected) {
    const savedValues = JSON.parse(localStorage.getItem("setSavedPair"));

    $(".movieDivImg").attr("src", savedValues.movie.Poster);
    $(".movieDivImg").attr("alt", savedValues.movie.Title);
    $(".movieDivTitle").text(savedValues.movie.Title);
    $(".movieDivDescription").text(savedValues.movie.Plot);

    $(".drinkDivImg").attr("src", savedValues.drink.strDrinkThumb);
    $(".drinkDivImg").attr("alt", savedValues.drink.strDrink);
    $(".drinkDivTitle").text(savedValues.drink.strDrink);
  }
  savedInfo(movieSelected, drinkSelected);
}); //End of on ready
