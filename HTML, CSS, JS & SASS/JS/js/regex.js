const input = document.querySelector(".phoneNum");
//console.log(input);
input.addEventListener("input", (event) => {
  const phoneNum = input.value;
  const format = document.querySelector(".format");
  const regex = /^[\(]?(\d{3})[-. \)]?(\d{3})[-. ]?(\d{4}$)/g;
  const found = regex.test(phoneNum);
  if (!found && phoneNum.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});
const form1 = document.querySelector(".phoneNumForm");
//console.log(form1);
form1.addEventListener("submit", (event) => {
  event.preventDefault();
  const form1 = document.getElementById("phoneNum");
  console.log(form1.value);
  const regex = /[-. ()]/g;
  const savedPhoneNum = form1.value.replaceAll(regex, "");
  console.log(savedPhoneNum);
});
const section1 = document.querySelector(".phoneNumSection");
section1.style.display = "none";
document.querySelector(".citySection").style.display = "block";
document.querySelector(".cityForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.querySelector(".city");
  console.log(encodeURI(city.value));
  const regex = / {2,}/g;
  const cleanedCityName = city.value.replaceAll(regex, " ").trim();
  console.log(cleanedCityName);
  console.log(encodeURI(cleanedCityName));
});

const arr = [
  {
    id: 1,
    firstName: "Raj",
    mailId: "raddj@yahoo.com",
  },
  {
    id: 2,
    firstName: "jhlRaj",
    mailId: "raeej@yahoo.com",
  },
  {
    id: 3,
    firstName: "Rjlaj",
    mailId: "rasdj@yahoo.com",
  },
  {
    id: 4,
    firstName: "Rakkj",
    mailId: "radgj@yahoo.com",
  },
  {
    id: 5,
    firstName: "Ragjj",
    mailId: "radgj@yahoo.com",
  },
  {
    id: 6,
    firstName: "Rasdfj",
    mailId: "d@yahoo.com",
  },
];

const newArr = arr.map((array) => {
  if (array.id % 2 == 0) return { ...array, id: array.id * 100 };
  else return array;
});

console.log(newArr);
