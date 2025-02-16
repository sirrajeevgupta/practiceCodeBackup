function x(a, x = a) {
  //let a = 7;
  function y() {
    return x++;
  }
  return y;
}
const p = x(7);
console.log(p()); //7
console.log(p()); //8
console.log(p()); //9
