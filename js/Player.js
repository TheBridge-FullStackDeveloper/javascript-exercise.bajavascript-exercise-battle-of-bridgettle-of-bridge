class Player {
    constructor (name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        return player.attack * diceValue;
    }

    isDead(player) {
        if (player.life <= 0) {
            return true;
        }
    }
}


