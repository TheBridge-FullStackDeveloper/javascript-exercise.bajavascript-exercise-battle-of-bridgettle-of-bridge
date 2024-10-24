class Player {
  constructor(name, life, attack) {
    this.name = name;
    this.initialLife = life; // Guardamos la vida inicial
    this.life = life;
    this.attack = attack;
  }

  attackPlayer(player, diceValue) {
    if (this.life <= 0) return; // No puede atacar si está muerto
    const damage = this.attack * diceValue;
    player.life -= damage;
    console.log(
      `${this.name} ataca a ${player.name} y causa ${damage} puntos de daño.`
    );
    if (player.life < 0) {
      player.life = 0; // Asegura que la vida no baje de 0
    }

    if (player.isDead()) {
      console.log(`${player.name} ha muerto.`);
    }
    return damage;
  }

  isDead() {
    return this.life <= 0;
  }

  reset() {
    // Este método restablece la vida del jugador a su valor inicial
    this.life = this.initialLife;
    console.log(`${this.name} ha sido reseteado con ${this.life} puntos de vida.`);
  }
}




