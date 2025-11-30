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
let arr = [45, 124, 54, 52, 124, 7, 0, 2, 10, 8, 5, 22, 5, 1, 9, 3435, 125, 3435],
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
//console.log(  'Total count of pairs that sum up to a given number are:',  result.count,  '\nAnd the pairs are:',  JSON.stringify(result.pairs));


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
  const nonRepetitiveElements = arr2.map((item) => { });
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


//? Flatten the array without using built in functions
let arr3 = [1, [2, [[3, false, null, 4], 5], 6, 'raj', true]];

//* using recursion
const flatAnArray = (arr, flattenedArr = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
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


//? remove duplicate elements from an array using two loops without using any inbuilt methods and Set collection also
const removeDublicate2 = (arr) => {

  let i, j, result = []

  for (i = 0; i < arr.length; i++) {
    let dublicate = false

    for (j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        dublicate = true
        break
      }
    }

    if (!dublicate) {
      result.push(arr[i])
    }
  }

  return result
}
//console.log(removeDublicate2(arr))


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
//console.log(omitArray([{ name: 'Rajeev', id: 1 }, { name: 'Shashank', id: 2 }, { name: 'Rahul', id: 3 }, { name: 'Amit', id: 4 },]));


//? Convert an array of objects into a grouped object by age:
// 	Input:
// 	[{id:1,name:"a1", age:16}, {id:2,name:"a2",age:18}, {id:3,name:"a3",age:16}, {id:4,name:"a4",age:15}]
// 	Output:
// 	{16: ["a1", "a3"], 15: ["a4"], 18: ["a2"]}

const groupedObject = (arr) => {
  let go = {}
  for (let i = 0; i < arr.length; i++) {

    go[arr[i].age] ? go[arr[i].age].push(arr[i].name) : go = { ...go, [arr[i].age]: [arr[i].name] }
  }

  return go
}
//console.log(groupedObject([{ id: 1, name: "a1", age: 16 }, { id: 2, name: "a2", age: 18 }, { id: 3, name: "a3", age: 16 }, { id: 4, name: "a4", age: 15 }]))


//? Count repeated words in a sentence except for a banned word

const wordCount = (sntnc, bannedWord) => {

  const arr = sntnc.split(" ");
  let count = 0, repeatedWordsObj = {}

  arr.forEach((word) => {

    if (arr.indexOf(word) !== arr.lastIndexOf(word) && word !== bannedWord) {
      count++
      repeatedWordsObj[word] = repeatedWordsObj[word] ? repeatedWordsObj[word] + 1 : 1
    }
  })

  return repeatedWordsObj
}
//console.log(wordCount("This is a sentence again again This a", "banned"))

const wordOccurance = (sntnc, bannedWord) => {
  let countObj = {}, wordArr = sntnc.toLowerCase().split(" ")

  for (let word of wordArr) {
    if (word !== bannedWord) countObj[word] = countObj[word] ? countObj[word] + 1 : 1
  }

  return countObj

}
//console.log(wordOccurance("This is a sentence again again is this a", "is"))


//? Problem to find pairs of numbers from an array that sum to zero
//* (O(n*n) time complexity
let arr1 = [45, 123, 54, 52, 34, -45, 45, 7, 0, 2, 10, 8, 5, -7, 9, 3435, 3]
const conditionalPair = (arr) => {

  let i, j, pairs = []

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        pairs.push([arr[i], arr[j]])
      }
    }
  }

  return pairs
}
//console.log(conditionalPair(arr1))

// *(O(n) time complexity
const conditionalPair2 = (arr) => {
  let pairs = [], seen = new Set(), i

  for (let num of arr) {

    if (seen.has(-num)) {
      pairs.push([num, -num])
    }
    seen.add(num)
  }
  return pairs
}
//console.log(conditionalPair2(arr1))


//? 2nd largest element in array using one loop
const secondLargest = (arr) => {

  let first = -Infinity, second = -Infinity

  if (arr.length < 2) return "Insuffcient array length"

  for (let num of arr) {
    if (num > first) {
      second = first
      first = num
    }
    else if (num > second && num < first) {
      second = num
    }
  }
  return second === -Infinity ? "No second largest elemnt exist" : second
}
//console.log(secondLargest(arr))


//? Rotate an array with k using only one for Loop
const rotateArrayByIndex = (arr, k) => {

  k = k % arr.length //ensures rotation works even if k is larger than the array length.
  // k = ((k % n) + n) % n; // Normalize negative k
  let rotatedArr = []

  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i + k) % arr.length
    //let newIndex = (i - k + arr.length) % arr.length // left roattion
    rotatedArr[newIndex] = arr[i]
  }
  return rotatedArr
}
//console.log(rotateArrayByIndex(arr, 2))

//* without using an array or using built in methods (some issue with negative input)

const rotateArray = (arr, rotateBy) => {
  const n = arr.length;
  // Handle cases where rotateBy is larger than array length or negative
  rotateBy = rotateBy % n;
  if (rotateBy < 0) {
    rotateBy += n; // Convert negative rotation to positive
  }

  // Slice the array into two parts and concatenate them in the rotated order
  return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
//console.log(rotateArray(arr, -2))


//? Merge the two array 
const mergeArray = (arr1, arr2) => {
  let result = []

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i])
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i])
  }
  return result
  //return [...arr1, ...arr2]
  //return arr1.concat(arr2)
}
//console.log(mergeArray([12, 3443], [345646, 547]))


//? Reverse a number
const reverseANumber = (num) => {

  let result = 0;
  let copy = num;

  while (copy > 0) {
    let digit = copy % 10;
    result = result * 10 + digit;
    copy = Math.floor(copy / 10)
  }

  return result
  //return Number(String(num).split('').reverse().join(''))
}
//console.log(reverseANumber(123))


//*? Write a function that takes:
/*
- funcs: Array of async functions,
- limit: number,
The function returns a promise When the function is called, the function shall start executing the async functions, but with only limit number of functions at a time. So at a given time, only limit number of async functions are being executed concurrently. When any one of these async functions is done executing and resolves, next function is added to the executing tasks. This process is repeated until all the async functions have executed and resolved. The function returns the result of all the async functions in an array, in the same order as passed in.*/

const myAsyncFunc = (funcs, limit) => {
  return new Promise((resolve, reject) => {

    let result = new Array(funcs.length),
      inProgress = 0,
      index = 0

    const runNext = () => {

      if (index === funcs.length && inProgress === 0) {
        return resolve(result)
      }

      while (index < funcs.length && inProgress < limit) {

        const currentIndex = index
        const fn = funcs[currentIndex]
        index++
        inProgress++

        Promise.resolve()
          .then(fn)
          .then(value => {
            result[currentIndex] = value
          })
          .catch(reject)
          .finally(() => {
            inProgress--
            runNext()
          }
          )
      }

    }
    runNext()
  })
}

const wait = (val, t) => () => new Promise((resolve) => setTimeout(() => resolve(val), t))

let asyncArr = [
  wait("A", 1000),
  wait("B", 2000),
  wait("C", 3000),
  wait("D", 4000),
  wait("E", 5000)
]

myAsyncFunc(asyncArr, 3000).then(console.log)



//? . Practical live reactJs question. Create two button which on click 5 different input box should open and on delete All button all records should be deleted. every individual record contains delete button which on click will delete that particular record.
//? create a circle on each click and remove bg color of circle when clicked on it.
//? what is es 6 ?


//? Typescript