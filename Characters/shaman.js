const daemon = require("../Pets/daemon.js");
const ingrid = require("../Weapons/ingrid.js");
const Character = require("./character.js");
const config = require("./className.js");

class Shaman extends Character {
    constructor(name) {
         super(name, config.className.ShamanClassName);
         this.pets.push(daemon);
         this.weapons.push(ingrid);
    }
}

module.exports = Shaman;