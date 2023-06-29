export class Pokemon {
  constructor(data) {
    this.id = data.id || ''
    this.name = data.name
    this.weight = data.weight
    this.height = data.height
    this.img = data.sprites.back_default
  }



  get activeTemplate() {
    return `
    
    <h1>${this.name}</h1>
    <h2>Weight:${this.weight}</h2>
    <h3>Height:${this.height}</h3>
    <button onclick="app.SandboxPokemonController.catchPokemon()">Catch</button>
    `
  }

  get myListTemplate() {
    return `
    <li class="selectable" onclick="">${p.name}</li>
    `

  }
}