class Dice {
    constructor(value){
        this.value = value;
    }
    roll(value){
        this.value = (Math.floor(Math.random() * 6)) + 1;
        return value
    }
}