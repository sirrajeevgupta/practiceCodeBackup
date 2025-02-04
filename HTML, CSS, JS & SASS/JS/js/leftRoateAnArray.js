const func = (arr) => {
  let i;
  let temp = arr[0];
  for (i = 0; i < arr.length - 1; i++) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  console.log(arr);
  arr[arr.length - 1] = temp;
  console.log('ArrayRotated to left is', arr);
};
func([1, 2, 3, 4]);
