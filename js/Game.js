class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice,
        this.player = player,
        this.enemy = enemy
    }
    battle(player, enemy){
        const roll = this.dice.roll()
        const danmageAtack = player.attackPlayer(enemy, roll);
        enemy.life -= danmageAtack
    }
}