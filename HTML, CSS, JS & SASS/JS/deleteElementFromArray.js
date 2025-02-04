const deleteItem = (arr, element) => {
  console.log('Initial Array: ', arr);
  console.log('Value removed', arr.splice(arr.indexOf(element), 1));
  arr.splice(arr.indexOf(element), 1);
  console.log('Array after removing element', arr);
};

deleteItem([1, 2, 3, 4], 3);
