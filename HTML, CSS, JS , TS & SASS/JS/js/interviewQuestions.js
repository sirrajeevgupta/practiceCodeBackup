//? Count the characters in a string. If string = 'raja', output should be like  r= 1, a=2, j= 1

const alphaCount = (str) => {
  let details = {};
  //* O(n*n) time complexity
  /*   for (let i = 0; i < str.length; i++) {
    let char = str[i],
      count = 1;
    if (details.hasOwnProperty(char) === true) continue;

    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === char) count++;
    }
    details[char] = count;
  } */

  //* O(n) time complexity
  for (const char of str) {
    details[char] = details[char] ? details[char] + 1 : 1;
  }

  //*  In your first regex /[{()}]/g the outer square brackets [] makes a character class, it will match one of the character specified inside of it. In this case the characters { ( " ) }.
  return JSON.stringify(details)
    .replaceAll(/[{"}]/g, '')
    .replaceAll(':', '=')
    .replaceAll(',', ', ');
};
//console.log(alphaCount('rajeev'));

//? give all possible substrings from a gievn string

const possibleSubstring = (str) => {
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      arr.push(str.slice(i, j)); //* we can also use substring, will do the same job
    }
  }

  return arr;
};
/* console.log(
  'Possible Substring from a given string are:\n',
  possibleSubstring('Rajeev')
); */

//? given 2 strings, we have to check if one string is a substring of another
let s1 = 'aj';
let s2 = 'RajeevAndRajeevAndMoreRajeev';

//* using inbuild 'includes()' function || returns only true/false || also counts empty substring
//console.log(s2.includes(s1));

//* using inbuild 'indexOf()' function || returns first occurance position if found, otherwise -1 || also counts empty substring
//console.log(s2.indexOf(s1));

//* using single loop
const isSubstring = (str1, str2) => {
  let result = [],
    i,
    j;

  for (i = 0; i <= str2.length - str1.length; i++) {
    let current = str2.substring(i, i + str1.length);
    if (current === str1 && str1 !== '') {
      result.push(i);
    }
  }

  return result;
};
//console.log('Substring found at positions:\n', isSubstring(s1, s2));

//* using nested loops
const isSubstringUsingNestedArray = (str1, str2) => {
  let result = [],
    i,
    j;

  for (i = 0; i < str2.length; i++) {
    for (j = i + 1; j < str2.length + 1; j++) {
      if (str1 === str2.substring(i, j)) result.push(i);
    }
  }

  return result;
};
/* console.log(
  'Substring found at positions:\n',
  isSubstringUsingNestedArray(s1, s2)
); */

//? Anagram string search

const anagramSearch = (subStr, mainStr) => {
  let result = [],
    i,
    j;
  let sortedSubStr = subStr.split('').sort().join('');

  for (i = 0; i <= mainStr.length - subStr.length; i++) {
    let tempSortedString = mainStr
      .substring(i, i + subStr.length)
      .split('')
      .sort()
      .join('');
    if (sortedSubStr === tempSortedString) result.push(i);
  }

  return result;
};
let subStr = 'ABCD';
let mainStr = 'BACDGABCDA';
//console.log(anagramSearch(subStr, mainStr));

//? count pairs that sum up to a given number
let arr = [45, 123, 54, 52, 34, 45, 7, 2, 10, 8, 5, 22, 5, 1, 3435, 3],
  number = 10;

//* O(n*n) complexity
const pairCountWithNestedLoops = (arr, number) => {
  let count = 0;
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === number) {
        count++;
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return { count, pairs };
};
const result = pairCountWithNestedLoops(arr, number);
/* console.log(
  'Total count of pairs that sum up to a given number are:',
  result.count,
  '\nAnd the pairs are:',
  JSON.stringify(result.pairs)
); */

//! WRONG - To be corrected
//* O(n*n) complexity
const pairCount = (arr, number) => {
  arr.sort((a, b) => a - b);
  let count = 0,
    pairs = [],
    left = 0,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === number) {
      count++;
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    }
    if (arr[left] + arr[right] < number) {
      left++;
    } else {
      right--;
    }
  }
  return { count, pairs };
};
/*const result2 = pairCount(arr, number);
 console.log(
  'Total count of pairs that sum up to a given number are:',
  result2.count,
  '\nAnd the pairs are:',
  JSON.stringify(result2.pairs) 
);*/

//? Find the first non-repeating number in a given array.
let arr2 = [11, 11, 12, 12, 1, 7, 8, 1, 7, 16, 0, 8, 19, 19, 14];

//* using nested loop
const nonRepElmntWithNestedLoop = (arr) => {
  let notFound = true,
    pos,
    i,
    j;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        break;
      }
    }

    if (j === arr.length) {
      pos = i;
      notFound = false;
      break;
    }
  }
  return pos ? arr[pos] : 'All elements are repetitive';
};
//console.log(nonRepElmntWithNestedLoop(arr2));

//* using higher order function find
const nonRepElmntWithfind = (arr2) => {
  const nonRepetitiveElement = arr2.find(
    (item) => arr2.indexOf(item) === arr2.lastIndexOf(item)
  );

  return nonRepetitiveElement
    ? nonRepetitiveElement
    : 'All elements are repetitive';
};
//console.log(nonRepElmntWithfind(arr2));

//* using filter higher order function filter
const nonRepElmntWithFilter = (arr2) => {
  const nonRepetitiveElement = arr2.filter(
    (item) => arr2.indexOf(item) === arr2.lastIndexOf(item)
  )[0];

  return nonRepetitiveElement
    ? nonRepetitiveElement
    : 'All elements are repetitive';
};
//console.log(nonRepElmntWithFilter(arr2));

//* using higher order function map
const nonRepElmntWithMap = (arr2) => {
  const nonRepetitiveElements = arr2.map((item) => {});
};

//* using a frequency object
const nonRepElmntWithFreqObject = (arr) => {
  let nonRepetitiveElement;
  let frequency = {};
  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === 1) {
      nonRepetitiveElement = arr[i];
      break;
    }
  }

  return nonRepetitiveElement
    ? nonRepetitiveElement
    : 'All elements are repetitive';
};
//console.log(nonRepElmntWithFreqObject(arr2));

//? Flatten an array
let arr3 = [1, [2, [[3, false, 4], 5], 6, 'raj', true]];

//* using recursion
const flatAnArray = (arr, flattenedArr = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      flattenedArr.push(arr[i]);
    } else {
      flatAnArray(arr[i], flattenedArr);
    }
  }

  return flattenedArr;
};
//console.log('Flattened array is:', flatAnArray(arr3));

//* using inbuild method flat()
//console.log(arr3.flat(Infinity));

//? find the duplicate element from an array.

const dublicateElements = (arr) => {
  let result = arr.filter(
    (element) => arr.indexOf(element) !== arr.lastIndexOf(element)
  );

  return Array.from(new Set(result));
};
//console.log('Dublicate elements are:', dublicateElements(arr2));

//? check if a string has all unique characters without using any additional data structure

const uniqueCharStr = (str) => {
  const sortedCopy = str.split('').sort().join('');
  let uniqueFlag = true;

  for (let i = 0; i < sortedCopy.length - 1; i++) {
    if (sortedCopy[i] === sortedCopy[i + 1]) uniqueFlag = false;
  }

  return uniqueFlag
    ? 'String has unique characters'
    : "Doesn't contains unique charcaters";
};
//console.log(uniqueCharStr('rajev pOo'));

//? Possible sub array sum

function subarraySum(arr) {
  // Write your code here
  let myArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      myArr.push(arr.slice(i, j));
    }
  }

  let flattenedArr = myArr.flat(Infinity);
  console.log(flattenedArr);
  let sum = flattenedArr.reduce((sum, item) => sum + item);

  return sum;
}
//console.log(subarraySum([4, 5, 6]));

//? Two arrays passed to one function, then remove the elements from the source array that are present in another array

const filterSourceArrary = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr1.splice(i, 1);
      i--;
    }
  }
  return arr1;
};
/* console.log(
  filterSourceArrary(
    [325, 34, 43, 6, 5, 6, 547, 65, 7],
    [11, 12, 32, 2, 3, 4, 3554, 46, 7]
  )
); */

//? Find unique element

const uniqueElement = (arr) => {
  const element = arr.find(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  );
  return element;
};
//console.log(uniqueElement([1, 1, 3, 6, 67, 3, 7, 7]));

//? Remove dublicate elements from an array

const removeDublicate = (arr) => {
  return arr.filter(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  );
};
//console.log(removeDublicate([1, 2, 3, 4, 4, 5, 5, 6, 7, 6, 1, 0]));

//? In a array of strings having a sentence you have to remove the special characters

const removeSpecial = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    let arrFromStr = arr[j].split('');
    for (let i = 0; i < arrFromStr.length; i++) {
      if (
        arrFromStr[i] === '%' ||
        arrFromStr[i] === '@' ||
        arrFromStr[i] === '$' ||
        arrFromStr[i] === '*' ||
        arrFromStr[i] === '&' ||
        arrFromStr[i] === '^'
      ) {
        arrFromStr.splice(i, 1);
        i--;
      }
    }

    arr[j] = arrFromStr.join('');
  }

  return arr;
};
//console.log(removeSpecial(['this%', 'this@cv', 'dgdfy*g', '&&dvxd&']));

//? An array of object was given with name and Id and you have to display the id only

const omitArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    delete arr[i].name;
  }
  return arr;
};
console.log(
  omitArray([
    { name: 'Rajeev', id: 1 },
    { name: 'Shashank', id: 2 },
    { name: 'Rahul', id: 3 },
    { name: 'Amit', id: 4 },
  ])
);
