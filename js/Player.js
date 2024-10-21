class Player {
    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }

    attackPlayer(player, diceValue) {
        if (this.life <=0) return;
        const damage = this.attack * diceValue;
        player.life -= damage;
        console.log(`${this.name} ataca a ${player.name} y le hace ${damage} puntos de daño`);

        if (player.isDead()) { 
            console.log(`${player.name} ha muerto.`);
        }
        return damage;
    }

    isDead() {
        return this.life <= 0;
    }
}