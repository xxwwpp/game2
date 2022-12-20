const basalisk = require("../Pets/basalisk");
const cjDrops = require("../Spells/cjdrops");
const irene = require("../Weapons/irene");
const Character = require("./character");
const config = require("./className.js");

class Gambler extends Character {
    constructor(name) {
        super(name, config.className.GamblerClassName);
        this.spells.push(cjDrops);
        this.pets.push(basalisk);
        this.weapons.push(irene);
    }
}

module.exports = Gambler;