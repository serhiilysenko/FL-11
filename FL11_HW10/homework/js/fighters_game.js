function fighter(stats) {
    let properties = stats,
        damage = properties.daage,    
        name = properties.name,
        agility = properties.agility,
        health = properties.health,
        maxHealth = properties.health,
        wins = 0,
        lose = 0;
    this.getName = function () {
        return name;
    }
    this.getDamage = function () {
        return damage; 
    }
    this.getAgility = function () {
        return agility;
    }
    this.getHealth = function () {
        return health;
    }
    this.hit = function (damage) {
        if (health > 0 && health > damage) {
            health -= damage;
        } else {
            health = 0;
        }
    }
    this.attack = function (defence) {
        let hitChance = 100,
            attackSucsess = hitChance - defence.getAgility(),
            random = Math.random() * hitChance;
        if (attackSucsess>=random) {
            defence.hit(damage);
            console.log(`${name} made ${damage} damage to ${defence.getName()}`);
        } else {
            console.log(`${name} missed attack`);
        }
    }
    this.combatLog = function () {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${lose}`);
    }
    this.heal = function (heal) {
        if (health + heal <= maxHealth) {
            health += heal;
            console.log(`${name} has ${health} health`)
        } else {
            health = maxHealth;
            console.log(`${name} has maximum health;: ${health}`);
        }
    }
    this.addWins = function () {
        wins += 1;
    }
    this.addLoses = function () {
        lose +=1;
    }
}
function battle (fighter1, fighter2) {
    let fighter1Health = fighter1.getHealth(),
        fighter2Health = fighter2.getHealth();
    if (fighter1Health > 0 && fighter2Health > 0){
        while (fighter1Health > 0 && fighter2Health > 0) {
            if (fighter1Health >0) {
                fighter1.attack(fighter2);
                fighter2Health = fighter2.getHealh();
            }
            if (fighter2Health > 0) {
                fighter2.attack(fighter1);
                fighter1Health = fighter1.getHealth();
            }
        }
        if (fighter1Health > 0) {
            fighter1.addWins();
            fighter2.addLoses();
            console.log(`${fighter1.getName()} defeats ${fighter2.getName()}`);
        } else {
            fighter2.addWins();
            fighter1.addLoses();
            console.log(`${fighter2.getName()} defeats ${fighter1.getName()}`);
        }
        return console.log(`${fighter1.getName()} HP: ${fighter1Health} ${fighter2.getName()} HP: ${fighter2Health}`);
    } else {
        if (fighter1Health === 0) {
            return console.log(`${fighter1.getName()} is dead and can not fight`);
        } else {
            return console.log(`${fighter2.getName()} is dead and can not fight`);
        }
    }
}   