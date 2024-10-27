class BattleGame {
    constructor(dice, player, enemy){
        this.dice = dice;
        this.player = player; 
        this.enemy = enemy 
    }
    battle(attacker, defender){
        const roll = this.dice.roll()
        const attackValue = player.attackPlayer(enemy, roll);
        return this.enemy.life -= attackValue
    }
}
    
//Bonuses 🏆
//- Intenta que la barra de la vida se queda a zero si la vida del jugador se queda en zero
//- Intenta crear un botón de reset para que el juego reinicie cuando uno de los jugadores se queda sin vida


