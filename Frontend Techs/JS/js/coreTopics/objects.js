const myObj = {
  name: 'Rajeev',
  age: 19,
  hobbies: ['Ear', 'Sleep', 'Code'],
  beverages: {
    morning: 'Coffee',
    afternoon: 'Iced tea',
  },
  action: function () {
    return `Time for ${this.beverages.morning}`;
  },
};
console.log(myObj.action());

/* 
console.log(Object.keys(myObj));
console.log(Object.values(myObj));
console.log(myObj);
console.log(myObj.hobbies);
console.log(myObj.hobbies[2]);
console.log(myObj.beverages);
console.log(myObj.beverages.morning);
console.log(myObj['beverages']);
console.log(myObj.action());
 */
// ! Inheritance

const vehicle = {
  wheels: 4,
  engine: function () {
    return 'WhROOOM!!';
  },
};

const car = Object.create(vehicle);
car.doors = 2;
console.log(car);
car.engine = function () {
  return 'WhOOSH!!';
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla);
tesla.engine = function () {
  return 'vhhhhmmm!';
};
console.log(tesla.engine());

//! DESTRUCTURING OBJECTS

const newObject = {
  a: 'a value',
  a: 'a value',
  c: 'c value',
  d: 'd value',
};

const { a: newa } = newObject;
const { a, b, c, d } = newObject;

console.log(newa);
console.log(c);

const randomValue = ({ a }) => {
  return a;
};
console.log(randomValue(newObject));
