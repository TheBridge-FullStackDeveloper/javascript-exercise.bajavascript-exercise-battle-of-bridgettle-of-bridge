/* La clase BattleGame es la encargada de gestionar el juego en sí y tiene los siguientes atributos:
dice: una instancia de la clase Dice para lanzar dados.
player: una instancia de la clase Player que representa al jugador.
enemy: una instancia de la clase Player que representa al enemigo. */
class BattleGame {
    constructor(dice, player, enemy) {
        this.dice = dice;
        this.player = player;
        this.enemy = enemy;
    }
    /*La clase incluye los siguientes métodos:
    battle(attacker, defender): este método recibe un atacante y un defensor como parámetros y hace que el atacante ataque al defensor. Esto implica usar el dado para determinar el valor del ataque y reducir la vida del defensor en consecuencia.
    Asegúrate de implementar estas clases y métodos en tu juego para que funcione correctamente. */
    battle(attacker, defender) {
        const attackValue = this.dice.roll();
        console.log(`${attacker.name} ataca a ${defender.name} con un valor de ${attackValue}`);
        attacker.attackPlayer(defender, attackValue);

        
        
        //Cuidado con este codigo que hecho modificaciones
        if (defender.life > 0) {
            defender.life -= attacker.attack * attackValue;
      
           
            if (defender.life < 0) {
              defender.life = 0;
            }
          }
    }

    
}
