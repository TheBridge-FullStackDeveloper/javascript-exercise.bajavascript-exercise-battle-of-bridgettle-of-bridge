class Player {
    constructor (name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {

        if (this.isDead()) {
            return 0;
        }
        const damage = this.attack * diceValue;
        player.life -= damage;

        if (player.life < 0) {
            player.life = 0;
        }

        if (damage > 10) {
            console.log("¡Ataque crítico!");
        }

        return damage;
    }

    isDead() {
        if (this.life <= 0) {
            return true;
        } else { 
            return false;
        }
    }


}
