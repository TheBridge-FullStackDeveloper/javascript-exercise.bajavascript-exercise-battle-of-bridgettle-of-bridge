class Player {
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    attackPlayer(player, diceValue){
        if(!this.isDead()){
        const attackResult = this.attack * diceValue
        return player.life -= attackResult
        
        }
    }
    isDead(){
        return (this.life <= 0)
    }   
}

    
