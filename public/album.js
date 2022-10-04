let pokelist = []
let meusPokemons = []

for(let i = 1; i < 152; i++){
    const pokemon = {
        id: i,
        img: `${i}.png` 
    }
    pokelist.push(pokemon)
}

const conteiner = document.getElementById("conteiner")

pokelist.forEach((pokemon) => {
    let ausente = ""
    let pokemonBuscado = meusPokemons.find((meuPoke) => {
        return pokemon.id === meuPoke
    })
    console.log(pokemonBuscado)
    if (!pokemonBuscado){
        ausente = "ausente"
    }
    conteiner.innerHTML += `
        <div id="cardConteiner">
            <div id="card">
                <img class="${ausente} cardImage" src="cartamelhorada/${pokemon.img}" alt="">
                <p>Quantidade:</p>
                <button>Anunciar</button>
            </div>
        </div>
    `
})