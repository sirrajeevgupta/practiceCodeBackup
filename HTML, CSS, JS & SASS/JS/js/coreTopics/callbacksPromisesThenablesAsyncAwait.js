//! Callabcks, Promises, Thenables, Async/Await

//callback
/* 
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

//myCalculator(5, 5);

//Promises
//Promises can have 3 state => Pending, Resolves, Rejected
*/
const myPromise = new Promise((resolve, reject) => {
  const error = false;

  if (!error) {
    resolve('Promise resolved!');
  } else {
    reject('Promise rejected!');
  }
});

console.log(myPromise); //! a promise is returned

const myNewPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Next Promise Resolved!');
  }, 3000);
});

myNewPromise.then((value) => {
  console.log(value);
});

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.log(err);
  }); //! a promise is handeled using thenables */
/*
//  Async/Await

/* const response = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  data.forEach((user) => console.log(user));
};

response(); */
