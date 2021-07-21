import { ProxyState } from "../AppState.js";
import { spellsService } from "../Services/SpellsService.js"


function _drawAll() {
  const spells = ProxyState.allApiSpells
  let template = ''
  spells.forEach(s => template += `<li class="action" onclick="app.spellsController.getSpell('${s.index}')">${s.name}</li>`)
  document.getElementById('api-spells').innerHTML = template
}

function _drawActiveSpell() {
  if (!ProxyState.activeSpell) {
    document.getElementById('active-spell').innerHTML = `<div class="text-center"><em>No Active Spell</em></div>`
    return
  }
  document.getElementById('active-spell').innerHTML = ProxyState.activeSpell.Template
}
export default class SpellsController {

  constructor() {

    ProxyState.on('allApiSpells', _drawAll)
    ProxyState.on('activeSpell', _drawActiveSpell)


    this.getAllSpells();
  }


  async getAllSpells() {
    try {
      await spellsService.getAllSpells();
    } catch (error) {
      console.error('There was an issue getting dnd api spells')
    }
  }

  async getSpell(id) {
    try {
      await spellsService.getSpell(id)
    } catch (error) {
      console.error('unable to get spell details')
    }
  }
}


