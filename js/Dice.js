class Dice {
  constructor() {
    this.value = 0;
  }

  roll() {
      this.value = Math.floor(Math.random() * 6) + 1;
      console.log(`El dado muestra: ${this.value}`);
      return this.value;
  }
}
