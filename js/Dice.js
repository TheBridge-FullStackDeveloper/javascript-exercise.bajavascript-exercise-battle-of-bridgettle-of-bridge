class Dice {

    constructor(value) {
        this.value = value;
    }

    roll() {
        this.value = Math.floor(Math.random() * 5) + 1;
        return this.value;
    }

}