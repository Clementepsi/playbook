export default class MyPokemon {
  constructor (name) {
    this.name = name
  }
    sayHello (message) {
    console.log(`[${this.name}] ${message}`)
  }
}