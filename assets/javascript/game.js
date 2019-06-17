var bulbasaur = {name:"Bulbasaur", type:"Plant", health:16, defense:12, attack:8, speed:10, pic:"assets/images/bulbasaur.jpeg"}
var charmander = {name:"Charmander", type:"Fire", health:10, defense:8, attack:16, speed:12, pic:"assets/images/charmander.jpeg"}
var pikachu = {name:"Pikachu", type:"Electric", health:8, defense:8, attack:14, speed:16, pic:"assets/images/pikachu.jpeg"}
var squirtle = {name:"Squirtle", type:"Water", health:12, defense:16, attack:10, speed:8, pic:"assets/images/squirtle.jpeg"}
var pokemon = [bulbasaur, charmander, pikachu, squirtle];

var pokemonCard
var playerPokemon
var computerPokemon
var pokemonPicturePlayer
var pokemonPictureComputer



// select pokemon

$(document).ready(function() {
    $(".info").html("<h4>Select a pokemon:<h4>");
});

for (i = 0; i < pokemon.length; i++) {
    pokemonCard = $("<button>");
    pokemonCard.attr("type", "button");
    pokemonCard.addClass("btn btn-primary pokemonSelect");
    pokemonCard.attr("value", pokemon[i].name);
    pokemonCard.attr("id", i);
    pokemonCard.text(pokemon[i].name);
    $(".buttons").append(pokemonCard);
}

$(".pokemonSelect").on("click", function(){
    pokemonPicturePlayer = $("<img>");
    pokemonPicturePlayer.attr("src", pokemon[this.id].pic);
    pokemonPicturePlayer.addClass("card");
    $(".stage").html(pokemonPicturePlayer);

    $(".action").html('<button id="select" class="btn btn-danger" value=' + this.id + '>Select</button>');

    console.log(this.id);

    $("#select").on("click", function(){
        playerPokemon = pokemon[this.value];
        computerSelect();
    });
});

var computerSelect = function() {
    console.log(playerPokemon);

    $(".info").empty();

    $(".buttons").empty();

    $(".info").html("<h4>You picked " + playerPokemon.name + ". Awesome choice!</h4>");

    $(".action").empty()

    $(".action").html('<button id="select" class="btn btn-danger">Opponent Selection</button>');

    $("#select").on("click", function(){
        computerPokemon = pokemon[Math.floor(Math.random() * 4)];
        console.log(computerPokemon);

        pokemonPictureComputer = $("<img>");
        pokemonPictureComputer.attr("src", computerPokemon.pic);
        pokemonPictureComputer.addClass("opponentPokemon card");

        $(".info").empty();
        $(".info").html("<h4>Your Opponent picked " + computerPokemon.name + ". Watch out!</h4>")
        $(".stage").append(pokemonPictureComputer);
        $("#select").hide();
        setupGame();
    });
}

var setupGame = function() {
    $(".action").html('<button id="play" class="btn btn-danger">Battle!</button>');
    $("#play").on("click", function(){
        console.log("test");
    })
}

console.log(bulbasaur);
console.log(charmander);
console.log(pikachu);
console.log(squirtle);


