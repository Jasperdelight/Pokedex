import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonServices.js";
import { Pop } from "../utils/Pop.js";

function _drawCaughtPokemon() {
  const myPokemonElem = document.getElementById('caughtPokemonList')
  if (!myPokemonElem) { return }

  const myPokemon = AppState.myPokemon
  let template = ''
  myPokemon.forEach(pokemon => template += pokemon.myListTemplate)
}

export class SandboxPokemonController {
  constructor() {
    console.log('sandbox connected')
    AppState.on('account', this.getPokemon)
  }

  async catchPokemon() {
    try {
      await sandboxPokemonService.catchPokemon()
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }

  async getPokemon() {
    try {
      await sandboxPokemonService.getPokemon()
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }
}

