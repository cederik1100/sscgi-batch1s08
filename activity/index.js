console.log(`              %c Pokemon Battle Simulator`, "color:rgb(255, 255, 255); font-size: 24px; font-weight: bold; text-align: center;");
 console.log(".....................................................................")
class Pokemon {
  
    constructor(name, type, level, hp, maxHP, defense) {
        this.name = name;
        this.type = type;
        this.level = level;
        this.hp = hp;
        this.maxHP = maxHP
        this.defense = defense
    }

    calculateDamage(basePower) {
        return Math.floor((this.level * basePower) / (10 + this.defense));
    }

    receiveDamage(damage) {
        this.hp -= damage;
        console.log(`%c🎯 ${this.name} receives ${damage} damage! HP left: ${this.hp}/${this.maxHP}`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        if (this.hp <= 0) {
            console.log(`%c☠ ${this.name} has fainted!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");

        }
        const healAmount = this.randomHeal();
        if (healAmount == 20) {
            if (this.hp >= 1){
                const PokemonHeal = this.hp + healAmount;
                const def = (this.defense + this.randomDefense())
                console.log(`%c🆙➕ ${this.name} heals ${PokemonHeal}/${this.maxHP} HP!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 255, 0); padding: 8px;"); 
                console.log(`%c🛡🆙 Defense boosted! Defense: ${def}`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0,255,0); padding: 8px;");
                
            }
        }
    }
    randomHeal(){
        return Math.random() > 0.25 ? 0 : 20;
    }
    randomDefense(){
        return Math.random() > 0.25 ? 0 : 15;
    }
    randomCritical(){
        let crit = Math.random() * (1 - 1 + 1) + 1;
        return Math.random() > 1 ? 0 : crit;
    }
}

class ElectricPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(20 * this.randomCritical());
        console.log(`%c⚔⚡ ${this.name} uses Thunder on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class FirePokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(20 * this.randomCritical());
        console.log(`%c⚔🔥 ${this.name} uses Flamethrower on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class WaterPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔🌊 ${this.name} uses Hydro Pump on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class GrassPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔🍃 ${this.name} uses Leaf Blade on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class RockPokemon extends Pokemon {
    attack(target) {
        const damage = this.calculateDamage(10 * this.randomCritical());
        console.log(`%c⚔💥 ${this.name} uses Tackle on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
    specialAttack(target) {
        const damage = this.calculateDamage(15 * this.randomCritical());
        console.log(`%c⚔ 🥊 ${this.name} uses Rock Slide on ${target.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(255, 0, 0); padding: 8px;");
        target.receiveDamage(damage);
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemons = [];
    }

    addPokemon(pokemon) {
        if (this.pokemons.length < 6) {
            this.pokemons.push(pokemon);
            console.log(`%c⭐ ${pokemon.name} has joined ${this.name}'s team!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 0, 255); padding: 8px;");
        } else {
            console.log(`%c⚠ ${this.name}'s team is full!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px double rgb(0, 0, 255); padding: 8px;");
        }
    }
}


// tournament
class Tournament {
    constructor(...trainers) {
        this.trainers = trainers;  // Store all the trainers
    }
 
    startTournament() {
        console.log(`%cTournament begins with ${this.trainers.length} trainers!`, "color:rgb(253, 253, 253); font-size: 15px; font-weight: bold; border: 1px dashed white; padding: 8px;");
       
        // Start first round
        let round = 1;
        let currentTrainers = [...this.trainers];
 
        // Continue until only one trainer remains (the winner)
        while (currentTrainers.length > 1) {
            console.log(`\n%cRound ${round}:`, "color:rgb(253, 253, 253); font-size: 15px; font-weight: bold; padding: 8px;");
            let winners = [];
 
            // Pair up trainers for the round
            for (let i = 0; i < currentTrainers.length; i += 2) {
                let trainer1 = currentTrainers[i];
                let trainer2 = currentTrainers[i + 1];
 
                console.log(`           %cMatch: ${trainer1.name} vs ${trainer2.name}`, "color:rgb(253, 253, 253); font-size: 15px; font-weight: bold; border: 1px dashed white; padding: 8px;");
 
                // Start battle between trainer1 and trainer2
                let winner = this.startBattle(trainer1, trainer2);
                winners.push(winner);
                console.log(`%cWinner of this match: ${winner.name}`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px dashed rgb(255, 0, 0); padding: 8px;");
            }
 
            // Update the trainers for the next round
            currentTrainers = winners;
            round++;
        }
 
        // Final winner
        console.log(`%c🎉🎊 The tournament winner is ${currentTrainers[0].name}!`, "color:rgb(253, 253, 253); font-size: 15px; font-weight: bold; border: 1px double rgb(238, 255, 0); padding: 8px;");
    }
 
    startBattle(trainer1, trainer2) {
        console.log(`%cBattle begins between ${trainer1.name} and ${trainer2.name}!`, "color:rgb(253, 253, 253); font-size: 15px; font-weight: bold; border: 1px dashed white; padding: 8px;");
        let t1Index = 0;
        let t2Index = 0;
 
        // Battle until one trainer's Pokémon are all defeated
        while (t1Index < trainer1.pokemons.length && t2Index < trainer2.pokemons.length) {
            let t1Pokemon = trainer1.pokemons[t1Index];
            let t2Pokemon = trainer2.pokemons[t2Index];
 
            console.log(`%c⭐ Round starts with ${t1Pokemon.name} vs ${t2Pokemon.name}!`, "color:rgb(253, 253, 253); font-size: 13px; font-weight: bold; border: 1px solid rgb(238, 255, 0); padding: 8px;");
 
            // Pokémon battle
            while (t1Pokemon.hp > 0 && t2Pokemon.hp > 0) {
                Math.random() < 0.5 ? t1Pokemon.attack(t2Pokemon) : t1Pokemon.specialAttack(t2Pokemon);
                if (t2Pokemon.hp > 0) {
                    t2Pokemon.attack(t1Pokemon);
                }
            }
 
            // Check if any Pokémon fainted and switch to the next Pokémon
            if (t1Pokemon.hp <= 0) {
                t1Index++;
            }
 
            if (t2Pokemon.hp <= 0) {
                t2Index++;
            }
        }
 
        // Determine the winner of the battle
        if (t1Index < trainer1.pokemons.length) {
            return trainer1;
        } else {
            return trainer2;
        }
    }
}


// trainers
const ash = new Trainer("Ash");
const misty = new Trainer("Misty");
const brock = new Trainer("Brock");
const bugsy = new Trainer("Bugsy");
const red = new Trainer("Red");
const gary = new Trainer("Gary");
const cynthia = new Trainer("Cynthia");
const lance = new Trainer("Lance");

console.log(`                       %c Trainers and Pokemons`, "color:rgb(255, 255, 255); font-size: 15px; font-weight: bold; text-align: center; border: 1px dashed rgb(0, 0, 255); padding: 8px;");

// pokemon for Ash
ash.addPokemon(new ElectricPokemon("Pikachu", "Electric", 10, 115, 115, 9));
ash.addPokemon(new FirePokemon("Charizard", "Fire", 12, 120, 120, 10));
ash.addPokemon(new RockPokemon("Onix", "Rock", 11, 110, 110, 11));
ash.addPokemon(new FirePokemon("Arcanine", "Fire", 13, 130, 130, 10));
ash.addPokemon(new WaterPokemon("Squirtle", "Water", 11, 110, 110, 10));
ash.addPokemon(new GrassPokemon("Bulbasaur", "Grass", 9, 90, 90, 10));

// pokemon for Misty
misty.addPokemon(new WaterPokemon("Starmie", "Water", 11, 110, 110, 9));
misty.addPokemon(new GrassPokemon("Bulbasaur", "Grass", 9, 90, 90, 10));
misty.addPokemon(new ElectricPokemon("Jolteon", "Electric", 12, 120, 120, 9));
misty.addPokemon(new FirePokemon("Flareon", "Fire", 13, 130, 130, 9));
misty.addPokemon(new WaterPokemon("Vaporeon", "Water", 12, 120, 120, 9));
misty.addPokemon(new RockPokemon("Onix", "Rock", 10, 100, 100, 11));

// pokemon for Brock
brock.addPokemon(new RockPokemon("Geodude", "Rock", 12, 120, 120, 11));
brock.addPokemon(new RockPokemon("Onix", "Rock", 14, 140, 140, 11));
brock.addPokemon(new WaterPokemon("Squirtle", "Water", 11, 110, 110, 10));
brock.addPokemon(new FirePokemon("Charmander", "Fire", 11, 110, 110, 8));
brock.addPokemon(new ElectricPokemon("Pikachu", "Electric", 10, 100, 100, 9));
brock.addPokemon(new GrassPokemon("Chikorita", "Grass", 10, 100, 100, 9));

//pokemon for bugsy
bugsy.addPokemon(new FirePokemon("Flareon", "Fire", 13, 130, 130, 9));
bugsy.addPokemon(new ElectricPokemon("Raichu", "Electric", 14, 140, 140, 11));
bugsy.addPokemon(new RockPokemon("Golem", "Rock", 16, 160, 160, 11));
bugsy.addPokemon(new WaterPokemon("Vaporeon", "Water", 12, 120, 120, 9));
bugsy.addPokemon(new ElectricPokemon("Electrode", "Electric", 15, 150, 120, 11));
bugsy.addPokemon(new FirePokemon("Magmar", "Fire", 12, 120, 120, 9));

// pokemon for red
red.addPokemon(new FirePokemon("Fennekin", "Fire", 11, 110, 110, 10));
red.addPokemon(new GrassPokemon("Chespin", "Grass", 10, 100, 100, 9));
red.addPokemon(new ElectricPokemon("Emolga", "Electric", 12, 120, 120, 9));
red.addPokemon(new WaterPokemon("Squirtle", "Water", 11, 110, 110, 10));
red.addPokemon(new RockPokemon("Tyranitar", "Rock", 15, 150, 150, 11));
red.addPokemon(new FirePokemon("Flareon", "Fire", 13, 130, 130, 9));

//pokemon for gary
gary.addPokemon(new FirePokemon("Arcanine", "Fire", 13, 130, 130, 10));
gary.addPokemon(new GrassPokemon("Leafeon", "Grass", 11, 110, 110, 10));
gary.addPokemon(new ElectricPokemon("Jolteon", "Electric", 12, 120, 120, 9));
gary.addPokemon(new WaterPokemon("Blastoise", "Water", 15, 150, 150, 10));
gary.addPokemon(new RockPokemon("Aerodactyl", "Rock", 14, 140, 140, 11));
gary.addPokemon(new FirePokemon("Magmortar", "Fire", 14, 140, 140, 9));

//pokemon for cynthia
cynthia.addPokemon(new RockPokemon("Garchomp", "Rock", 16, 160, 160, 12));
cynthia.addPokemon(new GrassPokemon("Roserade", "Grass", 13, 130, 130, 10));
cynthia.addPokemon(new ElectricPokemon("Luxray", "Electric", 14, 140, 140, 10));
cynthia.addPokemon(new WaterPokemon("Milotic", "Water", 15, 150, 150, 11));
cynthia.addPokemon(new FirePokemon("Rapidash", "Fire", 13, 130, 130, 9));
cynthia.addPokemon(new GrassPokemon("Torterra", "Grass", 15, 150, 150, 10));

//pokemon for lance
lance.addPokemon(new FirePokemon("Charizard", "Fire", 13, 130, 130, 10));
lance.addPokemon(new ElectricPokemon("Raikou", "Electric", 14, 140, 140, 10));
lance.addPokemon(new WaterPokemon("Lapras", "Water", 15, 150, 150, 11));
lance.addPokemon(new RockPokemon("Tyranitar", "Rock", 15, 150, 150, 11));
lance.addPokemon(new GrassPokemon("Leafeon", "Grass", 11, 110, 110, 9));
lance.addPokemon(new WaterPokemon("Vaporeon", "Water", 12, 120, 120, 9));

const tournament = new Tournament(ash, misty, brock, bugsy, red, gary, cynthia, lance);
tournament.startTournament();
