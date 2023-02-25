document.querySelector('#search').addEventListener("click", getPokemon);

function lowerCaseName(string) {
    return string.toLowerCase();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var input = document.getElementById("pokemonName");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
    }
})

function getPokemon(e) {
const name = document.querySelector("#pokemonName").value;
const pokemonName = lowerCaseName(name);

https://pokeapi.co/api/v2/pokemon/${pokemonName}

    
fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
.then((response) => response.json())
.then((data) => {
    document.querySelector(".description").innerHTML = `
    <div>
        <p>${data.flavor_text_entries["0"].flavor_text}</p>
    </div>
    `;

}).catch((err) => {
    console.log("Pokemon not found", err);
});
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <div class="featured">
        <img 
            src="${data.sprites.other["home"].front_default}" 
            alt="${data.name}"
        />
        </div>
        <div class="shiny">
        <img
            src="${data.sprites.other["home"].front_shiny}"
            alt="Shiny form"
        />
        </div>
        </div>
        <div class="pokemonInfo">
            <img class="sprite" style="width: 100px; text-align:center;" src="${data.sprites.front_default}">
            <h2>${capitalizeFirstLetter(data.name)}</h2>
            <p>Weight: ${data.weight}kg</p>
            <p>Height: ${data.height}'</p>
        `;

    }).catch((err) => {
        console.log("Pokemon not found", err);
    });

    e.preventDefault();
}
