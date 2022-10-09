import * as pokedexRepository from "../repositories/pokedexRepository.js";

export async function getMyPokedex(userId) {
  const { rows: pokemons } = await pokedexRepository.getAllPokemons();
  const { rows: myPokemons } = await pokedexRepository.getMyPokedex(userId);
  const pokedex = []
  console.log(myPokemons)
  //complexidade o(n²) -> melhorar futuramente

  for(let j = 0; j < pokemons.length; j++){
    let isntFound = true
    for(let i = 0; i < myPokemons.length; i++) {
      console.log(j, i)
      if (pokemons[j].number === myPokemons[i].number) {
        console.log('deu', myPokemons[i], pokemons[j])
        pokedex.push({...pokemons[j], hasIt: true, isForSale: myPokemons[i].isForSale , quantity: myPokemons[i].quantity})
        isntFound = false
        break
      }
    }
    if(isntFound) {
      pokedex.push({...pokemons[j], hasIt: false, isForSale: null , quantity: 0})
    }
  }
  return pokedex;
}

export async function getAllPokemons() {
  const { rows: pokemons } = await pokedexRepository.getAllPokemons(); 
  return pokemons
}


