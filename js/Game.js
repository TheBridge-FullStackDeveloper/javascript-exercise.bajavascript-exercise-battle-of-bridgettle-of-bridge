class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice;
        this.player = player;
        this.enemy = enemy;
    
        
    }

    battle(attacker, defender) {
        this.dice.roll();
        attacker.attackPlayer(defender, this.dice.value)

    }

}



