const users = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  //console.log(users);

  users.forEach((element) => {
    console.log(element);
  });

  const filteredArray = users.filter((element) => {
    return element.id % 2 === 0;
  });
  console.log(filteredArray);

  const mappedArray = filteredArray.map((element) => element.id * 5);
  console.log(mappedArray);

  const reducedArrayValue = mappedArray.reduce(
    (accumulator, element) => accumulator + '_' + String(element),
    20 //20 is the initial value of accumulator, given as a 2nd parameter
  );
  console.log(reducedArrayValue);

  const reduceRightArrayValue = mappedArray.reduceRight(
    (accumulator, element) => accumulator + '_' + String(element),
    20 //20 is the initial value of accumulator, given as a 2nd parameter
  );
  console.log(reduceRightArrayValue);
};

users();
