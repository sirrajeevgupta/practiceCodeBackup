class Pizza {
  #size; //* fields starting with '#' are private
  #sauce = 'traditional';

  constructor(pizzaSize) {
    this.toppings = [];
    this.#size = pizzaSize;
  }
  setBake() {
    console.log(`Baking a ${this.#size} ${this.#sauce} sauce pizza`);
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  getToppings() {
    return this.toppings;
  }
}

class SpecialityPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = 'Dominoz';
    this.size = pizzaSize;
  }

  getSlice() {
    console.log(`Our ${this.type} ${this.size} pizza has 6 slices `);
  }
}

const myPizza = new Pizza('large');
console.log(myPizza.size); //*  private field, will return undefined
myPizza.setToppings('Chicken Tikka');
myPizza.setBake();
console.log(myPizza.getToppings());
myPizza.setToppings('Paneer Tikka');
console.log(myPizza.getToppings());

const newSpeciality = new SpecialityPizza('supreme');
newSpeciality.getSlice();
