import MySpellsController from "./Controllers/mySpellsController.js";
import SpellsController from "./Controllers/SpellsController.js";

class App {
  spellsController = new SpellsController();
  mySpellsController = new MySpellsController();
}

window["app"] = new App();
