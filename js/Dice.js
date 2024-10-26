class Dice {
    constructor() {
        this.value = 1;
    }

    roll() {
        this.value = Math.floor(Math.random() *6),+1;
    }
}