/*
//      ||  MODULES
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as pluck } from "./guitars.js";
import User from "./user.js";
/* import * as guitars from "./guitars.js"; */
/* import playGuitar from "./guitars.js";
import {shredding, plucking} from "./guitars.js";
 */

/* guitars.shredding();
guitars.playGuitar();
guitars.plucking(); */

/* playGuitar();
shredding();
plucking(); 

console.log(User);
const me = new User("rajnettrivia@gmail.com", "Rajeev");
console.log(me);
me.greeting();
playGuitar();
shred();
pluck();


//      ||  WEB STORAGE APIs

const arr=["eat", "sleep", "gym", "code"];
console.log(arr);

const myObj = {
    name:"rajeev",
    hobbies:["eat", "sleep", "gym", "code"],
    position: ()=> {
        console.log("I love missionary.");
    }
}
 myObj.position();
window.alert("Hello!");
window.alert(location) *
window.sessionStorage.setItem("mySessionStorage",JSON.stringify(myObj));
const mySessionStorage= window.sessionStorage.getItem("mySessionStorage");
console.log(JSON.parse(mySessionStorage));
window.localStorage.setItem("myLocalStorage",myObj);
const myLocalStorage = window.localStorage.getItem("myLocalStorage");
console.log(myLocalStorage);
console.log(typeof(myLocalStorage));
console.log(window.sessionStorage.key(0));
console.log(window.sessionStorage.key(1));
window.sessionStorage.removeItem("mySessionStorage");
console.log(window.sessionStorage.key(1));
window.localStorage.clear();
console.log(window.localStorage.getItem("myLocalStorage"));
console.log(window.localStorage.length);

//      ||  DOM MANIPULATION

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2)
 const view2 = document.getElementsByClassName("view2");
console.log(view2) */

//      ||  ARRAY

/* pop;
unshift;
shift;
splice - (delete, replace, add)  - in between th array 
delete myArray[1];
slice(x,y) - gives a part of array
reverse
array.join() - returns a string of an array elements seperated by comma
string.split(",")

myArr = ["Rajeev", 25, "Bangalore","Introvert", "Missionary", true, 11];
console.log(myArr);
result = myArr.push("Watching Movies");
console.log(result);
console.log(myArr);
console.log(myArr);
result = myArr.pop();
console.log(result);
console.log(myArr);
myArr.shift();
console.log(myArr);
myArr.unshift("Rajeev");
console.log(myArr);
myArr.splice(2,1,"Lucknow");
console.log(myArr);
myArr.splice(3,0,"Greater Noida", "Bangalore");
console.log(myArr);
myArr.splice(5,0,"Gujarat");
console.log(myArr);
myArr.splice(5,1);
console.log(myArr); 

 */
/* 

// var is function scoped

// Functions

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("ewt24t@gmail.com"));

// Anonymours Function

const getUserNameFromEmail1 = function (email) {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail1("22222@gmail.com"));

// Arrow Function

const getUserNameFromEmail2 = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail2("242323@gmail.com"));


// Strings
const myVariable = "Mathematics";

console.log(myVariable.length);
console.log(myVariable.charAt(3));
console.log(myVariable.indexOf("at"));
console.log(myVariable.lastIndexOf("at"));
console.log(myVariable.slice(5, 6));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("Mat"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("Joe Jane Rajeev".split(" ")); 


// Numbers
const myNumber = 42;
const myNumber1 = 42.010;
const myString = "5.22354423dfj";

console.log(myNumber===myNumber1);
console.log(myNumber===myString)
const myFloat = 42.0100300;
console.log(Number(myString)===myNumber);
const myName = "RAjeev";
console.log(Number(myName));
console.log(Number(false));
console.log(Number.isInteger(myNumber1));
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(4));
console.log(myNumber1.toFixed(3));
console.log(Number.parseInt(myNumber1));
console.log(typeof(Number.parseFloat(myNumber1)));
console.log(Number.parseFloat("382.928428abc").toFixed(3).toString());
console.log(Number("Raj"));
console.log(isNaN("23.34j"));
console.log(Number.isNaN(23));


// Math Methods and Properties

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.9));
console.log(Math.pow(2,5));
console.log(Math.min(2,0.5,9));
console.log(Math.max(2,9.5,9));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);


// Write code that will return random letter from your name

const userName = "Rajeev";
console.log(userName.charAt((Math.floor(Math.random() * userName.length))));


//alert("Hello World!");
//let myBool = confirm("Ok === True\nCancel === False");
//let name = prompt("Please enter your name."); 


// rock, paper & scissors game

let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  let playerChoice = prompt("Please enter rock, paper or scissors.");
  if (playerChoice) {
    playerChoice = playerChoice.trim().toLowerCase();
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      let choices = Math.floor(Math.random() * 3);
      let computerChoice =
        choices === 0 ? "rock" : choices === 2 ? "paper" : "scissors";

      let result =
        playerChoice === computerChoice
          ? "tie game"
          : playerChoice === "rock" && computerChoice === "paper"
          ? `Player One: ${playerChoice}\nComputer: ${computerChoice}\nComputer Wins!`
          : playerChoice === "rock" && computerChoice === "scissors"
          ? `Player One: ${playerChoice}\nComputer: ${computerChoice}\nPlayer One Wins!`
          : playerChoice === "paper" && computerChoice === "scissors"
          ? `Player One: ${playerChoice}\nComputer: ${computerChoice}\nComputer Wins!`
          : `Player One: ${playerChoice}\nComputer: ${computerChoice}\nPlayer One Wins!`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Okay, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Okay, may be next time.");
}*/
