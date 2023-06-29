import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokedexController } from "./controllers/PokedexController.js";
import { SandboxPokemonController } from "./controllers/SandboxPokemonController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokedexController, SandboxPokemonController]
    ,
    view: /*html*/`
    <div class="container-fluid">
    <section class="row">
      <div class="col-3">
        <h1>Pokemon</h1>
        <ul id="pokemonList">

        </ul>
      </div>
      <div id="activePokemon" class="col-6 text-center bg-primary text-light">pokemon      

      </div>

      <div class="col-3">
      <h1>Caught Pokemon</h1>
      <ul id="caughtPokemonList">

      </ul>
    </div>

    </section>
  </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */