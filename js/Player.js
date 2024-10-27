class Player {
    constructor(name, life, attack){
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    attackPlayer(player, diceValue){
        if(!this.isDead()){
            const attackResult = this.attack * diceValue
            const statusLife = player.life -= attackResult
            
            if(attackResult > 10){
                return console.log("¡Ataque critico!")
            }
            
            return statusLife
        }
        
    }
    isDead(){
        return (this.life <= 0)
    }   
}

    
