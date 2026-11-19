const player = { name: "Віктор", health: 100, attack: 20 };
const monster = { name: "Гоблін", health: 80, attack: 15 };
const inventory = ["меч", "щит", "зілля здоров’я"];

function attack() {
    monster.health = Math.max(0, monster.health - player.attack);
    console.log(player.name + " атакує: монстр має " + monster.health + " HP");
}

function monsterAttack() {
    player.health = Math.max(0, player.health - monster.attack);
    console.log(monster.name + " атакує: гравець має " + player.health + " HP");
}

function showStatus() {
    console.log(player.name + ": " + player.health + " HP | " +
        monster.name + ": " + monster.health + " HP");
}

console.log("Гра «Битва з монстром»");
console.log("Інвентар: " + inventory.join(", "));
showStatus();
let round = 1;
while (player.health > 0 && monster.health > 0) {
    console.log("Раунд " + round);
    attack();
    if (monster.health > 0) {
        monsterAttack();
    }
    round++;
}
showStatus();
if (player.health > 0) {
    console.log("Перемога! " + player.name + " переміг монстра.");
} else {
    console.log("Поразка. Переміг монстр.");
}
