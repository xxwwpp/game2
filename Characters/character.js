const config = require("./className.js");

class Character {
    constructor(name, className) {
        this.name = name;
        this.className= className;
        this.level = 1;
        this.mana = 3;
        this.speed = 3;
        this.health = 10;
        this.attack = 4;
        this.pets = [];
        this.weapons = [];
        this.spells = [];
        this.activePet = null;
        this.activeWeapon = null;
        this.activeSpells = null;
    }

    levelUp(){
        this.level += 1;
        if(this.className === config.className.ShamanClassName) {
            console.log("levelling up ", this.className);
            this.attack = this.attack +2;
            this.health = this.health +4;
            this.mana = this.mana +10;
            this.speed = this.speed +7;
        }
        else if (this.className === config.className.GamblerClassName) {
            console.log("levelling up ", this.className);
            this.attack = this.attack +3;
            this.health = this.health +8;
            this.mana = this.mana +7;
            this.speed = this.speed +5;
        }
        else if (this.className === config.className.MedicClassName) {
            console.log("levelling up ", this.className);
            this.attack = this.attack +1;
            this.health = this.health +10;
            this.mana = this.mana + 8;
            this.speed = this.speed +12;
        }
    }

    getDamage(spellName) {
        if(this.attack) {
            const characterattack = this.attack;
            return characterattack;
        }
        else if(spellName) {
            const spell = this.spells.find(s => s.name === spellName);
            if(!spell) return 0;
            if(this.mana < spell.mana) {
                console.log("You're not man-a enough to cast this spell!");
                return 0;
            }
            this.mana -= spell.mana;
            return spell.damage + this.attack;
        }
        else if(this.activePet) {
            const petDamage = this.activePet.damage;
            return petDamage + this.attack;
        }
        else if(this.activeWeapon) {
            const weaponDamage = this.activeWeapon.damage;
            return weaponDamage + this.attack;
        }
    }

    addPet(petName) {
        this.pets.push(petName);
    }
    summonPet(petName) {
        for (let i=0; i < this.pets.length; i++) {
            const pets = this.pets[i];
            if(pets.name === petName) {
                this.activePet = pets;
            }
        }
    }

    addSpell(spellName) {
        this.spells.push(spellName);
    }

    useSpell(spellName) {
        for(let i=0; i< this.spells.length; i++) {
            const spells = this.spells[i];
            if(spells.name === spellName && this.mana != 0 && this.mana >= this.spells[i].mana){
                this.activeSpell = spells;
            }
        }
    }

    addWeapon(weaponName) {
        this.weapons.push(weaponName);
    }

    equipWeapon(weaponName) {
        for(let i=0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if(weapon.name === weaponName) {
                this.activeWeapon = weapon;
            }
        }
    }
}

module.exports = Character;