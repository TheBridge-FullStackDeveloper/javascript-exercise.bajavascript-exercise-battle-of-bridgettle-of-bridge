class Dice {
    constructor(value){
        this.value = value
    }
    roll(){
        const random = Math.floor((Math.random() * 6) + 1);
        this.value = random
        return this.value
    }
}