import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokedexService {

  async getPokemon() {
    const res = await pokemonApi.get('/pokemon')
    AppState.allPokemon = res.data.results
    console.log('pokeman?', AppState.allPokemon)
  }

  async getPokemonDetails(pokeName) {
    const res = await pokemonApi.get(`/pokemon/${pokeName}`)
    console.log('poked in the service', res.data)
    const newPokemon = new Pokemon(res.data)
    console.log('poker in the appstate', newPokemon)
    AppState.activePokemon = newPokemon
  }
}

export const pokedexService = new PokedexService()