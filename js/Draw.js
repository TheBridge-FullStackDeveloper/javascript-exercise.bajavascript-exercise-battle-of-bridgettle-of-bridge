const dice = new Dice();
const player = new Player("Heroe", 100, 2);
const enemy = new Player("Enemigo", 100, 3);
const game = new BattleGame(dice, player, enemy);

const ul = document.getElementById("history");
const diceElement = document.getElementById("dice-value");

function play() {
  document.getElementById("attack").disabled = true;
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

renderLife(game.player);
renderLife(game.enemy);
document.getElementById("attack").addEventListener("click", play);

function renderLife(player) {
  const lifeBar = document.getElementById(
    "health-" + player.name.toLowerCase()
  );
  
  lifeBar.setAttribute("style", "width:" + player.life + "%");
}

function renderBattleLog(attacker, defender) {
  diceElement.innerText = game.dice.value;
  let text, defeatText;

  text = `${attacker.name} ataca a ${defender.name} y le hace ${
    attacker.attack * game.dice.value
  } puntos de daño`;

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

    const gameOver = document.getElementById("game-over");
    gameOver.className = "show";
    document.getElementById("attack").disabled = true;
  }
}
