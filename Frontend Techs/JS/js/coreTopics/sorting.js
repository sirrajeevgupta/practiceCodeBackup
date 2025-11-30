//! Inbuild JS sorting methods

// JavaScript provides built-in methods for sorting arrays. The primary method is Array.prototype.sort(), and a newer, non-mutating alternative is Array.prototype.toSorted().

//* Array.prototype.sort()
// This method sorts the elements of an array in place and returns a reference to the same array, now sorted. 
// Default Behavior: If no compareFunction is provided, the elements are sorted by converting them to strings and comparing their sequences of UTF-16 code unit values. This can lead to unexpected results when sorting numbers (e.g., [1, 10, 2] might sort as [1, 10, 2] because "10" comes before "2" lexicographically).
// Custom Sorting with compareFunction: To achieve specific sorting orders (like numerical sorting or sorting by object properties), a compareFunction can be passed as an argument. This function takes two arguments, a and b, representing elements to be compared, and should return:
// A negative value if a should come before b.
// A positive value if a should come after b.
// Zero if a and b are considered equal in terms of sorting order.

//* Array.prototype.toSorted()
// Introduced in ES2023, this method offers a non - mutating way to sort an array.It returns a new array with the elements sorted, leaving the original array unchanged.

// The crucial distinction is that sort() modifies the original array, while toSorted() creates and returns a new sorted array, preserving the original.

//* Other related methods:
//* Array.prototype.reverse(): Reverses the order of elements in an array in place.
//* Array.prototype.toReversed(): Returns a new array with the elements in reversed order, leaving the original array unchanged.

let arr = [0, 5, 346, -1, 45, 7, 9, 9, 1, 23]
let sortedArr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr.sort()) // sorts lexicographically
// console.log(arr.sort((a, b) => a - b)) // mutates the origan array and returns reference
// console.log(arr.toSorted((a, b) => b - a)) // returns a new sorted array
console.log("Original Array:", arr)


//!   BUBBLE SORT (compares adjacent values and swaps the higher value forward)

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    //for (let j = 0; j < arr.length - 1; j++) {
    for (let j = 0; j < arr.length - i - 1; j++) { // optimised code
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }

  return arr
}
//console.log(bubbleSort(arr))

const optimizedBubbleSort = (arr) => {
  let swapped = false
  for (let i = 0; i < arr.length - 1; i++) {
    //for (let j = 0; j < arr.length - 1; j++) {
    for (let j = 0; j < arr.length - i - 1; j++) { // optimised code
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
    }
    if (swapped == false) break
  }

  return arr
}
//console.log(optimizedBubbleSort(arr))


//!   SELECTION SORT (keep shifting the smallest element to the end of sorted part of the array)

const selectionSort = (arr) => {
  let i, j;

  for (i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};
//console.log(selectionSort(arr));


//! INSERTION SORT (starts from 2nd index, and keeps the array in 2 parts, sorted and unsorted, takes the ith element and puts it int he right place of the sorted array using another nested loop)

const insertionSort = (arr) => {

  for (let i = 1; i < arr.length; i++) {

    let key = arr[i], j = i - 1

    while (j >= 0 && arr[j] > key) {

      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = key
  }

  return arr
};
//console.log(insertionSort(arr));


//!   MERGE SORT (based on divide and conqer)

const mergeSort = (arr) => {

  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

const merge = (left, right) => {

  let i = 0, j = 0, result = []

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    }
    else {
      result.push(right[j])
      j++
    }
  }

  return result.concat(left.slice(i), right.slice(j))
}

console.log(mergeSort(arr))
