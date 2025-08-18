const funcinTwoTraverse = (arr) => {
  let i, j;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }

  console.log('Updated array is:', arr);
};
const funcinOneTraverse = (arr) => {
  let count = 0,
    i;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      [arr[i], arr[count]] = [arr[count], arr[i]];
      count++;
    }
  }
  console.log('Updated array is:', arr);
};

funcinOneTraverse([0, 12, 0, 34, 5, 0, 67, 0, 24]);
