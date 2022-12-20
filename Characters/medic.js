const bandage = require("../Spells/bandage.js");
const Character = require("./character.js");
const config = require("./className");

class Medic extends Character {
    constructor(name) {
        super(name, config.className.MedicClassName);
        this.spells.push(bandage);
    }
}

module.exports = Medic;