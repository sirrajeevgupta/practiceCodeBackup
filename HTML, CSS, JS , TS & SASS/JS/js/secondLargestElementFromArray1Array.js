const func = (arr) => {
  let i,
    lgt = 0,
    slgt = -1;

  for (i = 1; i < arr.length; i++) {
    if (arr[i] > arr[lgt]) {
      slgt = lgt;
      lgt = i;
    } else if (arr[i] < arr[lgt]) {
      if (slgt == -1 || arr[i] > arr[slgt]) slgt = i;
    }
  }

  console.log(
    'Largest element is:',
    arr[lgt],
    'at index',
    lgt + 1,
    '.\nSecond Largest element is:',
    arr[slgt],
    'at index',
    slgt + 1
  );
};

func([2324, 34, 2324, 2324, 34]);
