// function to find sum of first n natural numbers

const sumOfNNaturnalNumbers = (n) => {
  let sumThroughLoop = 0;
  let sumThroughFormula;
  for (i = 1; i <= n; i++) sumThroughLoop = sumThroughLoop + i;

  sumThroughFormula = (n * (n + 1)) / 2;

  console.log('sum through loop', sumThroughLoop);
  console.log('sum through formula', sumThroughFormula);
};

sumOfNNaturnalNumbers(5);
