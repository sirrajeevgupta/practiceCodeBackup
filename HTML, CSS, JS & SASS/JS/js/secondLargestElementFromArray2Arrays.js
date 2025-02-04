const func = (arr) => {
  let largest = 0,
    i,
    j,
    secondLargest = -1;
  for (i = 1; i < arr.length; i++) {
    if (arr[largest] < arr[i]) largest = i;
  }

  for (j = 0; j < arr.length; j++) {
    if (arr[j] !== arr[largest]) {
      if (secondLargest == -1) {
        secondLargest = j;
      } else if (arr[j] > arr[secondLargest]) {
        secondLargest = j;
      }
    }
  }
  console.log(`Largest element ${arr[largest]} found at index ${largest + 1}`);
  if (secondLargest !== -1) {
    console.log(
      `Second largest element ${arr[secondLargest]} found at index ${
        secondLargest + 1
      }`
    );
  } else {
    console.log('No second largest element found');
  }
};

func([10, 10]);
