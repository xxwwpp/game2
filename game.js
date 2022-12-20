const Shaman = require("./Characters/shaman.js");
const Medic = require("./Characters/medic.js");
const Gambler = require("./Characters/gambler.js");
const randomizemobs = require("./Mobs/randomizemobs");
const prompt = require("prompt-promise");
const config = require("./Characters/className");
const Mob = require("./Mobs/mobs.js");

async function gameLoop() {
    let character;
    // in my game loop at th start I want to get the class choice from the user
    // they can pick shaman, medic, or gambler. 
    const classChoice = await prompt("Choose Your Fighter ");
    console.log("You have selected:", classChoice);
    if(classChoice === config.className.GamblerClassName) {
        character = new Gambler("Dad Of the Year");
    } else if (classChoice === config.className.MedicClassName) {
        character = new Medic("Dr. Doctor");
    } else if (classChoice === config.className.ShamanClassName) {
        character = new Shaman("Simbizzle Bop");
    } else {
        throw Error("You typed a class that doesn't exist!");
    }
    console.log(character);

    // spawn a random mob then prompt to fight it.
    // let's just take the first mob in the array, then if we beat it, we fight the second one.

    let badGuy = randomizemobs[0];
    console.log("A group of " + badGuy.name + " appears!");

    while(character.health > 0 && badGuy.health > 0) {
        console.log("Your character's pets:");
        console.log(character.pets);
        const move = await prompt("Select your pet!");
        console.log("You chose: " + move);
        const damage = character.getDamage(move);
        console.log("You attack for " + damage);
        const mobDamage = badGuy.damage;
        console.log(badGuy.name + " hits you! They caused " + badGuy.damage + " damage to you!");
        badGuy.health = badGuy.health - damage;
        character.health = character.health - mobDamage;
        character.levelUp();
        console.log("Whoa! Good job! Looks like you just levelled up!");
        console.log(character);
        console.log("Try attacking again...");
    }
    console.log("Fight over!");

}

gameLoop();

//const gambler = new Gambler("Dad of the Year");
//gambler.equipWeapon("Irene");
//console.log(gambler);

//const badGuy = zombies;
//console.log(badGuy);

//console.log(gambler.getDamage());