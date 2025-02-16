const name = {
  firstName: 'Rajeev',
  lastName: 'Gupta',
};
const fullName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} from ${city}, ${state}`);
};

//* Every function in JavaScript has these properties: call(), apply(), bind()
fullName.call(name, 'Lucknow', 'UP');
fullName.apply(name, ['Lucknow', 'UP']);
const copyFullName = fullName.bind(name, 'Lucknow', 'UP');
copyFullName();
