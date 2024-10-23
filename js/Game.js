class BattleGame {
    constructor(dice, player, enemy){
        this.dice = dice;
        this.player = player; 
        this.enemy = enemy 
    }
    battle(attacker, defender){
        if(this.player.isDead() == false || this.enemy.isDead() == false){
            this.player.attackPlayer(enemy, this.roll())
            return this.enemy.life
        } else {
            console.log("GAME OVER")
        }  
    }
}
    //Esto implica usar el dado para determinar el valor del ataque y reducir la vida del defensor en consecuencia.
    




//Bonuses 🏆
//- Intenta que la barra de la vida se queda a zero si la vida del jugador se queda en zero
//- Intenta crear un botón de reset para que el juego reinicie cuando uno de los jugadores se queda sin vida
//- Se el daño es mayor de 10 puntos pon un mensaje de "¡Ataque crítico!" en la consola


