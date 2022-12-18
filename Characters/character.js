class Character {
    constructor(name, className) {
        this.name = name;
        this.className= className;
        this.level = 1;
        this.mana = 1;
        this.speed = 1;
        this.health = 1;
        this.pets = [];
        this.weapons = [];
        this.spells = [];
        this.activePet = null;
        this.activeWeapon = null;
        this.activeSpells = null;
    }

    levelUp(){
        this.level += 1;
        if(this.className === "shaman") {
            this.attack = this.attack +2;
            this.health = this.health +4;
            this.mana = this.mana +10;
        }
        else if (this.className === "gambler") {
            this.attack = this.attack +3;
            this.health = this.health +8;
            this.mana = this.mana +7;
        }
        else if (this.className === "medic") {
            this.attack = this.attack +1;
            this.health = this.health +10;
            this.mana = this.mana + 8;
        }
    }

    getDamage() {
        if(this.activePet) {
            const petDamage = this.activePet.damage;
            return petDamage;
        }
        else if(this.activeSpell) {
            const spellDamage = this.spells.damage;
            return spellDamage;
        }
        else if(this.activeWeapon) {
            const weaponDamage = this.activeWeapon.damage;
            return weaponDamage;
        }
        else {
            return this.attack;
        }
    }

    addPet(petName) {
        this.pets.push(petName);
    }
    summonPet(petName) {
        for (let i=0; i < this.pets.length; i++) {
            const pets = this.pets[i];
            if(pets.name === petName) {
                this.activePet = pet;
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