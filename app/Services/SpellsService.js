import { ProxyState } from "../AppState.js"
import { dndApi } from "./Axios.js"
import Spell from "../Models/Spell.js"


class SpellsService {
  async getAllSpells() {
    let res = await dndApi.get()
    // console.log(res.data.results)
    // Remember to log the res harrison joke.
    ProxyState.allApiSpells = res.data.results
  }
  async getSpell(id) {
    let res = await dndApi.get(id)
    console.log(res.data);
    ProxyState.activeSpell = new Spell(res.data)
  }



}


export const spellsService = new SpellsService()