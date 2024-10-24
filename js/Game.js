class BattleGame {
  constructor(dice, player, enemy) {
    this.dice = dice;
    this.player = player;
    this.enemy = enemy;
  }

  battle(attacker, defender, ) {
    const attackValue = this.dice.roll();
    console.log(
      `${attacker.name} ataca a ${defender.name} con un valor de ${attackValue}`
    );
    attacker.attackPlayer(defender, attackValue);

    if (defender.life > 0) {
      defender.life -= attacker.attack * attackValue;

      if (defender.life < 0) {
        defender.life = 0;
      }

    }
   
    
  }
}
