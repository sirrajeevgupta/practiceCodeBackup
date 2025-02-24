//* Read-only Map-like objects have the property size, and the methods: entries(), forEach(), get(), has(), keys(), values(), and [Symbol.iterator]().
//* Writeable Map-like objects additionally have the methods: clear(), delete(), and set().

const myMap = new Map();

myMap.set('name', 'Rajeev');
myMap.set('city', 'Lucknow');
myMap.set('age', 19);
myMap.set(69, 'Not a fan');
myMap.set('oil', 'dislike');
myMap.set({ 5: 6 }, 'dislike');
console.log(myMap.get('city'));
console.log(myMap);
console.log(myMap.size);
console.log(myMap.has('city'));
//myMap.delete('city');
console.log(myMap);
myMap.forEach((value, key) => console.log(key, value));
console.log('');
for (let [k, v] of myMap) {
  console.log(k, v);
}
console.log('');
console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());
//myMap.clear();
console.log(myMap);
myMap.set({ 2: 3 }, 'an object');
myMap.set(function () {
  console.log('123');
}, 'a function');
console.log(myMap.get({}));
console.log(
  myMap.get(function () {
    console.log('123');
  })
);

for (let k of myMap.keys()) {
  console.log(k);
}

const arr = [
  ['key1', 'value1'],
  ['key2', 'value2'],
];
console.log(arr);

const newMap = new Map(arr);
console.log(newMap);

const revertedArr = Array.from(newMap);
console.log(revertedArr);
