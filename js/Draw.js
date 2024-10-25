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

// Si uno de los player se queda sin vida, el juego se reinicia con un botón reset.

// El botón reset en html ya está puesto, solo falta añadirle un evento que reinicie el juego.

// Qué reinicia el boton reset? 

// 1. La vida de los dos players
// 2. El historial de la batalla
// 3. El estado del juego 
// 5. El mensaje de game over 
// 6. El dado
// 7. La barra de vida de los players


// ¿Cómo se reinicia el juego?
// 1. Se crea una función resetGame que reinicie la vida de los dos players, el historial de la batalla, el estado del juego, el botón de ataque, el mensaje de game over, el dado y la barra de vida de los players.
// 2. Se añade un evento al botón reset que llame a la función resetGame.

document.getElementById("reset").addEventListener("click", resetGame);

function resetGame() {
  game.player.life = 100;
  game.enemy.life = 100;
  ul.innerHTML = "";
  diceElement.innerText = "";
  document.getElementById("attack").disabled = false;
  renderLife(game.player);
  renderLife(game.enemy);
};


