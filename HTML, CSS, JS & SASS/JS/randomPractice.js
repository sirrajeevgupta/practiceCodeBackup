function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleFallLocation = apples.map((x) => x + a);
  const orangesFallLocation = oranges.map((x) => x + b);

  const appleCount = appleFallLocation.filter((x) => {
    if (x >= s && x <= t) return x;
  });
  const orangeCount = orangesFallLocation.filter((x) => {
    if (x >= s && x <= t) return x;
  });
  console.log(appleCount.length);
  console.log(orangeCount.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
