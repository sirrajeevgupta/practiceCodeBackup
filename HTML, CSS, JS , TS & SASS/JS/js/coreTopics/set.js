const arr = [1, 2, 3, 4, 5, 1, 3, 4, 3];

const mySet = new Set(arr);
console.log(arr);
console.log(mySet);
mySet.add(31);
console.log(mySet);
mySet.delete(2);
console.log(mySet);
mySet.size;
console.log(mySet.has(1));
mySet.forEach((item) => console.log(item));
const newArr = Array.from(mySet);
console.log(newArr);
