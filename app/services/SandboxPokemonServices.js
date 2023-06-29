import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { api } from "./AxiosService.js"

class SandboxPokemonService {

  async catchPokemon() {
    console.log('poked in service')
    const caughtPokemon = AppState.activePokemon
    console.log("caught pokemon in appstate", caughtPokemon)
    const res = await api.post('api/pokemon', caughtPokemon)
    console.log('caught pokeman', res.data)
    AppState.myPokemon = res.data
    console.log('my pokemons', AppState.myPokemon)
  }

  async getPokemon() {
    const pokemonToSendToApi = AppState.activePokemon
    const res = await api.post('api/pokemon', pokemonToSendToApi)
    // const builtPokemon = res.data.map(p => new Pokemon(p))
    // console.log("work", builtPokemon)
    // AppState.myPokemon = builtPokemon
    AppState.myPokemon = res.data
    console.log('got my pokemon?', AppState.myPokemon)
  }
}

export const sandboxPokemonService = new SandboxPokemonService()