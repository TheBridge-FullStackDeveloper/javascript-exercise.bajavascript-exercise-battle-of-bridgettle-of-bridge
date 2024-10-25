class Player {
    constructor(name,life,attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
    }
    

    attackplayer(player, diceValue) {
         if (player.this.life <=0)
            return console.log("You have no health");
        }      
            else {
            const damageDone = this.attack * diceValue;
            player.life  = player.life - damageDone;
         }
        
     console.log(`${this.name} ataca a ${player.name} y le hace ${damage} puntos de daño`);
    
    
    
    };


   


}