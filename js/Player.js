class Player {

    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.maxlife = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        let damage = 0;

        if (!player.isDead()) {
            damage = this.attack * diceValue;
        }

        player.life -= damage;
    }

    isDead = () => this.life <= 0
}