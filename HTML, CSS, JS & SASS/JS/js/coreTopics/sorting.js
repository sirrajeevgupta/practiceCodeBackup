//  ! SELECTION SORT

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
/* console.log(
  'Selection sort on an array is:',
  selectionSort([535, 4, 65, 8, 7, 6, 4, 1, 0, 0])
); */

//  ! INSERTION SORT

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};
console.log(
  'Array sorted through insertion sort is: ',
  insertionSort([2, 5, 346, 547, 0, 34, 56, 4568, 7, 9, 73, 23, 1])
);
