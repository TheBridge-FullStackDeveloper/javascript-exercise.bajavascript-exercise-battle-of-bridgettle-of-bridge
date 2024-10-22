class Player {
    constructor(name, life, attack){
        this.name = name,
        this.life = life,
        this.attack = attack
    }
    attackPlayer(player, diceValue){
        if(player.life <= 0){
            return 
        }
        return diceValue * this.attack
    }
    isDead(){
        return !this.life
    }
}

