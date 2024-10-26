class Player {
  constructor(name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
  }

  

  attackPlayer(player, diceValue) {
    if (this.isDead()) {
      return 0;
    }

    const damageDone = this.attack * diceValue;
    player.life -= damageDone;

    if (player.life < 0) {
        player.life = 0;
    }
    return damageDone;
  }
  
  
  
  isDead() {
    if (this.life <= 0) {
      return true;
    } else {
      return false;
    }
  }

}

//const player1 = new Player("Héroe", 100, 10);
//const player2 = new Player("Enemigo", 100, 5);
