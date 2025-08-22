const fact = (n) => {
  if (n == 0) return 1;
  else return n * fact(n - 1);
};
//console.log('Factorial of 5 is:', fact(5));

const nthFibNumb = (n) => {
  if (n == 0) return 0;
  else if (n == 1) return 1;
  else {
    return nthFibNumb(n - 1) + nthFibNumb(n - 2);
  }
};
//console.log('6th fibonacci number is:', nthFibNumb(6));

const fib = (n, arr = [0, 1]) => {
  arr[0] = 0;
  arr[1] = 1;
};
//console.log('Fibonacci series of 6 numbers is:', fib(6));

const numbers = (n, arr = []) => {
  if (n == 0) {
    arr.push(0);
    return arr;
  } else {
    arr.push(n);
    return numbers(n - 1, arr);
  }
};
//console.log('Numbers from 6 to 0:', numbers(6));

const isPal = (strng) => {
  if (strng === strng.split('').reverse().join('')) {
    return 'palindrome';
  } else {
    return 'Not a palindrome';
  }
};

//console.log('String is:', isPal('kk'));

const isPalRec = (str, s, l) => {
  if (str[s] !== str[l]) return 'Not a palinrome';
  if (s == l) return 'Palindrome';
  if (s > l) return 'Palindrome';
  return isPalRec(str, s + 1, l - 1);
};
//console.log('String is:', isPalRec('kk'));

const sumOfDigits = (num, i = 0, sum = num.length === 1 ? num : 0) => {
  if (num.length === 1) return sum;

  if (i < num.length) {
    sum = sum + Number(num[i]);
    return sumOfDigits(num, i + 1, sum);
  }
  return sum;
};
//console.log('Sum of digits of a number is:', sumOfDigits(String(122482358)));

/* const ropePieces = (lgth, a, b, c) => {
  let cuts = 0;
  for (let i = lgth; i > 0; i--) {
    if (lgth / i === a || lgth / i === b || lgth / i === c) {
      cuts = i;
      return cuts;
    }
    return -1;
  }
};

console.log(ropePieces(23, 12, 9, 11)); */

const possibleSubstring = (str) => {
  let arr = [],
    i,
    j;

  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j <= str.length; j++) {
      arr.push(str.slice(i, j));
    }
  }

  return arr;
};
//
//console.log('Possible substrings are:', possibleSubstring('ABCD'));

var count1 = 0,
  count2 = 0;
for (var i = 0; i < 3; i++) {
  try {
    if (i == 2) {
      xxxxx();
    }
  } catch (e) {
    count1++;
  } finally {
    count2++;
  }
}
console.log(count1, count2);
