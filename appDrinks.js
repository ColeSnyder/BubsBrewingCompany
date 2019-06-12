var beerMenu = document.querySelector(".menuContent");


// Beer variables

var beerMenu = document.querySelector(".beerMenu");
var beerButton = document.querySelector("#beerButton");
var exitButtonBeer = document.querySelector("#exitBeer");

//tap beer variables
var tapBeerButton = document.querySelector("#tapBeerButton");
var tapBeerMenu = document.querySelector(".tapBeerMenu");
var exitButtonTapBeer = document.querySelector("#exitTapBeer");

//wine variables
var wineButton = document.querySelector("#wineButton");
var wineMenu = document.querySelector(".wineMenu");
var exitWine = document.querySelector("#exitWine");

//Beer actions
beerButton.addEventListener("click", function() {

  beerMenu.style.opacity=1;
  // beerMenu.style.display="block";
	beerMenu.style.visibility="visible";




});

exitButtonBeer.addEventListener("click", function() {

  beerMenu.style.opacity=0;
  // beerMenu.style.display="none";
	beerMenu.style.visibility="hidden";

});

//tap beer actions
tapBeerButton.addEventListener("click", function() {

  tapBeerMenu.style.opacity=1;
  // tapBeerMenu.style.display="block";
  tapBeerMenu.style.visibility="visible";

});

exitButtonTapBeer.addEventListener("click", function() {

  tapBeerMenu.style.opacity=0;
	// tapBeerMenu.style.display="none";
  tapBeerMenu.style.visibility="hidden";

});

//Wine actions
wineButton.addEventListener("click", function() {

  wineMenu.style.opacity=1;
  // wineMenu.style.display="block";
  wineMenu.style.visibility="visible";

});

exitWine.addEventListener("click", function() {

  wineMenu.style.opacity=0;
	// wineMenu.style.display="none";
  wineMenu.style.visibility="hidden";

});
