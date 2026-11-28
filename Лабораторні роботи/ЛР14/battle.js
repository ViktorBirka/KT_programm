class Character {
    #health;
    constructor(name, health, attackPower) {
        this.name = name;
        this.#health = health;
        this.attackPower = attackPower;
    }
    get health() { return this.#health; }
    takeDamage(damage) {
        this.#health = Math.max(0, this.#health - damage);
    }
    attack(target) {
        target.takeDamage(this.attackPower);
        console.log(this.name + " атакує: " + target.name + " має " + target.health + " HP");
    }
    showStatus() { console.log(this.name + ": " + this.#health + " HP"); }
    isAlive() { return this.#health > 0; }
}

class Player extends Character {
    constructor(name) {
        super(name, 100, 20);
        this.inventory = ["меч", "щит", "зілля здоров’я"];
    }
}

class Monster extends Character {
    constructor(name) { super(name, 80, 15); }
}

const player = new Player("Віктор");
const monster = new Monster("Гоблін");
console.log("Гра «Битва з монстром»");
console.log("Інвентар: " + player.inventory.join(", "));
player.showStatus();
monster.showStatus();
let round = 1;
while (player.isAlive() && monster.isAlive()) {
    console.log("Раунд " + round);
    player.attack(monster);
    if (monster.isAlive()) monster.attack(player);
    round++;
}
player.showStatus();
monster.showStatus();
console.log(player.isAlive()
    ? "Перемога! " + player.name + " переміг монстра."
    : "Поразка. Переміг монстр.");
