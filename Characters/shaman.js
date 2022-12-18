const daemon = require("../Pets/daemon.js");
const ingrid = require("../Weapons/ingrid.js");
const Character = require("./character.js");

class Shaman extends Character {
    constructor(name) {
         super(name, "shaman");
         this.pets.push(daemon);
         this.weapons.push(ingrid);
    }
}

module.exports = Shaman;