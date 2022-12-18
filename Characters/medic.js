const bandage = require("../Spells/bandage.js");
const Character = require("./character.js");

class Medic extends Character {
    constructor(name) {
        super(name, "medic");
        this.spells.push(bandage);
    }
}

module.exports = Medic;