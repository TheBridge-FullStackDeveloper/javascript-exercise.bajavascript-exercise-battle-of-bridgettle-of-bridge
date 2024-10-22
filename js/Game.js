class BattleGame {

    constructor(dice, player, enemy) {
        this.dice = dice;
        this.player = player;
        this.enemy = enemy;
    }

    battle(attacker, defender) {

        const roll = this.dice.roll()
        attacker.attackPlayer(defender, roll);

        //return defender.life -= damageAtack;
    }
}