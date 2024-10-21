class BattleGame {
    constructor(playerName, enemyName) {
        this.dice = new Dice();  // Instancia de la clase Dice
        this.player = new Player(playerName, 20);  // Crea un jugador con 20 de vida
        this.enemy = new Player(enemyName, 20);  // Crea un enemigo con 20 de vida
    }

    // Método que gestiona el ataque entre el atacante y el defensor
    battle(attacker, defender) {
        const attackValue = this.dice.roll();  // Lanza el dado para determinar el valor del ataque
        console.log(`${attacker.name} ataca a ${defender.name} con un valor de ataque de ${attackValue}.`);
        defender.takeDamage(attackValue);  // El defensor recibe daño
    }

    // Método para iniciar el juego
    start() {
        // Ciclo de batalla hasta que uno de los jugadores se quede sin vida
        while (this.player.isAlive() && this.enemy.isAlive()) {
            this.battle(this.player, this.enemy);  // Jugador ataca al enemigo
            if (this.enemy.isAlive()) {
                this.battle(this.enemy, this.player);  // Enemigo ataca al jugador si sigue vivo
            }
        }

        // Mensaje final de quién ganó
        if (this.player.isAlive()) {
            console.log(`${this.player.name} ha ganado la batalla!`);
        } else {
            console.log(`${this.enemy.name} ha ganado la batalla!`);
        }
    }
}