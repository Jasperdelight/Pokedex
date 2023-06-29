import { AppState } from "../AppState.js";
import { pokedexService } from "../services/PokedexService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokemon() {
  let pokemon = AppState.allPokemon
  console.log('drawing pokes', pokemon)
  let template = ''
  pokemon.forEach(p => {
    template += `
  <li class="selectable" onclick="app.PokedexController.getPokemonDetails('${p.name}')">${p.name}</li>
  `
  })
  setHTML('pokemonList', template)
}

function _drawActivePokemon() {
  let activePokemon = AppState.activePokemon
  console.log('active poker', activePokemon)
  setHTML("activePokemon", activePokemon.activeTemplate)
}

export class PokedexController {
  constructor() {
    console.log('hello');
    this.getPokemon()

    AppState.on('allPokemon', _drawPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
  }

  async getPokemon() {
    try {
      await pokedexService.getPokemon()
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }

  async getPokemonDetails(pokeName) {
    try {
      await pokedexService.getPokemonDetails(pokeName)
    } catch (error) {
      console.error(error);
      Pop.error(error.message);
    }
  }




}