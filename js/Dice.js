class Dice {
    constructor(value) {
        this.value = Math.floor(Math.random()*6) + 1;
        this.value = value;
    }

    roll(value) {
        return value;
    }
}