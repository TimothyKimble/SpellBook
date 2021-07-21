import { ProxyState } from "../AppState.js"
import { mySpellsService } from "../Services/mySpellsService.js"


function _drawAll() {
  const spells = ProxyState.mySpells
  const activeSpell = ProxyState.activeSpell || {}
  let template = ""
  spells.forEach(s => template += `<li class="action ${activeSpell.id === s.id ? 'text-primary' : ''}" onclick="app.mySpellsController.setSpell('${s.id}')">${s.name}</li>`)
  if (!template) {
    template += '<p><em>NO SPELLS IN BOOK<em></p>'
  }
  document.getElementById("my-spells").innerHTML = template
}
export default class MySpellsController {

  constructor() {

    ProxyState.on('mySpells', _drawAll)
    this.getMySpells()
  }
  async getMySpells() {
    try {
      await mySpellsService.getMySpells()
    } catch (error) {
      console.error('Error')
    }
  }

  async addSpell() {
    try {
      await mySpellsService.addSpell()
    } catch (error) {
      console.error("didn't work homie")
    }
  }

  setSpell(id) {
    try {
      mySpellsService.setSpell(id)
    } catch (error) {
      console.error("Invalid Id")
    }
  }
  async removeSpell() {
    try {
      await mySpellsService.removeSpell()
    } catch (error) {
      console.error("invalid id")
    }
  }

}