//* Protypal inheritance & the ptrototype chain

//* the prototype value should always be an object or null
//* can not cicrcle reference
//* An object can directly inherit from one object

const person = {
  alive: true,
};

const musician = {
  plays: true,
};

musician.__proto__ == person; //! legacy way/old way
Object.setPrototypeOf(musician, person); //! modern way
console.log(musician.plays);
console.log(musician.alive);

console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(musician);
console.log(musician.__proto__ === Object.getPrototypeOf(musician)); //true

const guitarist = {
  strings: 6,
  __proto__: musician,
};

console.log(guitarist);
console.log(guitarist.plays); //true
console.log(guitarist.alive); //true

//! FUNCTION PROTOTYPE

function Flower(type) {
  this.type = type;
  this.size = 'large';
}
Flower.prototype = function () {
  return `It smells good`;
};
const marigold = new Flower('Home');
console.log(marigold);
console.log(marigold.__proto__ === Flower.prototype);
console.log(marigold.__proto__);
console.log(Flower.prototype);
