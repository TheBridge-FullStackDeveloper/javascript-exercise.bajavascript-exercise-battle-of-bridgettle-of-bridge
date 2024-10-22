const dice = new Dice();
const player = new Player("Heroe", 100, 10);
const enemy = new Player("Enemigo", 100, 10);

const game = new BattleGame(dice, player, enemy);

const ul = document.getElementById("history");
const diceElement = document.getElementById("dice-value");
const gameOver = document.getElementById("game-over");


function play() {
  document.getElementById("attack").disabled = true;
  gameOver.className = "hidden";
  const player = game.player;
  const enemy = game.enemy;

  game.battle(player, enemy);
  
  renderBattleLog(player, enemy);

  if (enemy.isDead()) return;

  game.battle(enemy, player);

  setTimeout(() => {
    renderBattleLog(enemy, player);
    document.getElementById("attack").disabled = false;
  }, 2000);
}

function reset() {

  game = new BattleGame(dice, player, enemy); 
  
  document.getElementById("attack").disabled = false;
  gameOver.className = "hidden";

  game.player.life = game.player.maxlife;
  game.enemy.life = game.enemy.maxlife;

  ul.innerHTML ="";

  renderLife(game.player);
  renderLife(game.enemy);
}

renderLife(game.player);
renderLife(game.enemy);
document.getElementById("attack").addEventListener("click", play);
document.getElementById("reset").addEventListener("click", reset);

function renderLife(player) {
  const lifeBar = document.getElementById(
    "health-" + player.name.toLowerCase()
  );

  let health = 0;
  if (player.life >= 0) {
    health = player.life
  }

  lifeBar.setAttribute("style", "width:" + health + "%");
}

function renderBattleLog(attacker, defender) {
  diceElement.innerText = game.dice.value;
  let text, defeatText;

  text = `${attacker.name} ataca a ${defender.name} y le hace ${
    attacker.attack * game.dice.value
  } puntos de daño`;

  if (attacker.attack * game.dice.value >= 10) {
    text = text.concat(` ¡Ataque crítico!`)
  }

  let elementText = document.createTextNode(text);
  let li = document.createElement("li");
  li.className = "typing";
  li.appendChild(elementText);
  ul.appendChild(li);
  renderLife(defender);

  if (defender.isDead()) {
    defeatText =
      defender.name + " ha sido derrotado y " + attacker.name + " ha ganado";
    elementText = document.createTextNode(defeatText);
    li = document.createElement("li");
    li.className = "typing";
    li.appendChild(elementText);
    ul.appendChild(li);

    gameOver.className = "show";
    document.getElementById("attack").disabled = true;

  }
}
