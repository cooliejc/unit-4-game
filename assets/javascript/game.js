var bulbasaur = {name:"Bulbasaur", type:"Plant", health:16, defense:12, attack:8, speed:10, pic:"assets/images/bulbasaur.jpeg"}
var charmander = {name:"Charmander", type:"Fire", health:10, defense:8, attack:16, speed:12, pic:"assets/images/charmander.jpeg"}
var pikachu = {name:"Pikachu", type:"Electric", health:8, defense:8, attack:14, speed:16, pic:"assets/images/pikachu.jpeg"}
var squirtle = {name:"Squirtle", type:"Water", health:12, defense:16, attack:10, speed:8, pic:"assets/images/squirtle.jpeg"}
var pokemon = [bulbasaur, charmander, pikachu, squirtle];

var pokemonCard
var playerPokemon
var garyPokemon
var playerCard
var garyCard

//Battle timeline stats
var timeline = 0;
var playerQueue
var garyQueue

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


// Create player's pokemon on the screen
$(".pokemonSelect").on("click", function(){

    playerCard = $("<div>");
    playerCard.addClass("card playerCard");

    var image = $("<img>");
    image.attr("src", pokemon[this.id].pic);

    $(".stage").html(playerCard);
    $(".playerCard").html(image);

    $(".action").html('<button id="select" class="btn btn-danger" value=' + this.id + '>Select</button>');

    console.log(this.id);

    $("#select").on("click", function(){
        playerPokemon = pokemon[this.value];
        garySelect();
    });
});

var garySelect = function() {
    console.log(playerPokemon);

    $(".info").empty();

    $(".buttons").empty();

    $(".info").html("<h4>You picked " + playerPokemon.name + ". Fucking great choice!</h4>");

    $(".action").empty()

    $(".action").html('<button id="select" class="btn btn-danger">Gary\'s Turn</button>');

    $("#select").on("click", function(){
        garyPokemon = pokemon[Math.floor(Math.random() * 4)];
        console.log(garyPokemon);

        garyCard = $("<img>");
        garyCard.attr("src", garyPokemon.pic);
        garyCard.addClass("garyPokemon card");

        $(".info").empty();
        $(".info").html("<h4>Oh shit! Gary picked " + garyPokemon.name + ". Watch out!</h4>")
        $(".stage").append(garyCard);
        $("#select").hide();
        setupGame();
    });
}

var setupGame = function() {
    $(".action").html('<button id="setup" class="btn btn-danger">Continue</button>');
    //Battle timeline variables
    timeline = 0;
    playerQueue = Math.floor(playerPokemon.speed/2);
    garyQueue = Math.floor(garyPokemon.speed/2);

    //Make health bars

    var playerHealthBar = $("<div>");
    var playerHealthBarInt = $("<div>");
    playerHealthBar.addClass("progress");
    playerHealthBarInt.addClass("progress-bar");
    playerHealthBarInt.attr("style", "height: 12px;");
    playerHealthBarInt.attr("style", "width: 100%");

    var garyHealthBar = $("<div>");
    garyHealthBar.addClass("progress garyHealthBar");
    garyHealthBar.attr("style", "height: 12px;");
    playerHealthBar.attr("aria-valuenow", "100");


    $("#setup").on("click", function() {
        $(".playerCard").append(playerHealthBar);
        $(".progress").html(playerHealthBarInt);

        // '<div class="progress" style="height: 12px;"><div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="25"></div></div>'

        $(".garyCard").append('<div class="progress" style="height: 12px;"><div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="25"></div></div>');

        $(".action").html('<button id="setup2" class="btn btn-danger">Test</button>');

        $("#setup2").on("click", function(){
            updatedHealthBar();
            console.log("test");
            console.log(playerPokemon.health);
        });
        
        var updateHealthBar = function() {
            playerPokemon.health == playerPokemon.health/2;
            // $(".playerHealthBarInt").attr("style", "width: " + 100 * bulbasaur.health / playerPokemon.health + "%;");
            $(".progress-bar").attr("style", "width: " + 100 * bulbasaur.health / playerPokemon.health / 2 + "%");
        }
    });
}






console.log(bulbasaur);
console.log(charmander);
console.log(pikachu);
console.log(squirtle);


