class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice.roll();
        this.player=player.attackPlayer();
        this.enemy= enemy;
    }


    battle(attacker, defender) {
        this.dice.roll();
        attacker.attackPlayer(defender,this.dice.value)
    }
}