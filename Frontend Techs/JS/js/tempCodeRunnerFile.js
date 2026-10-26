const mergeAndSort = (arr1, arr2) => {
  //* through predefined sort function
  /*   const arrsum = [...arr1, ...arr2];
  arrsum.sort((a, b) => a - b); */
  //* through traditional loops
  /*   const arrsum = [...arr1, ...arr2];
  let swap = false;
  for (let i = 0; i < arrsum.length; i++) {
    for (let j = 0; j < arrsum.length; j++) {
      if (arrsum[j] > arrsum[j + 1]) {
        swap = true;
        [arrsum[j], arrsum[j + 1]] = [arrsum[j + 1], arrsum[j]];
      }
    }
    if (swap === false) break;
  } */
  //* least timecomplexity solution (ONLY FOR PRE-SORTED ARRAYS)
  let arrsum = [],
    i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arrsum.push(arr1[i++]);
    else arrsum.push(arr2[j++]);
  }
  while (i < arr1.length) arrsum.push(arr1[i++]);
  while (j < arr2.length) arrsum.push(arr2[j++]);

  return arrsum;
};

console.log(mergeAndSort([1, 23, 445, 668], [0, 1, 23, 45, 67, 89]));
