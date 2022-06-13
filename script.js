// Local & Global Scope Function

//Block scope
//Local scope
//Global scope

//Block Scope:
// {
//   let val = 2;
//   console.log(val);
// } // let is a Block Scope

let user = "Raj";
(function greetuser() {
  let user = "Gokul";
  let msg = "Hello " + user;
  log(msg);
})(); // Immediate Invoke Function
function log(msg) {
  console.log(msg);
} // Nested Function is possible
console.log(user);

//Function Scope

// (function displayNumber() {
//   for (i = 1; i <= 10; ++i) {
//     // In Function var = i (Default) if suppose, let=i means its change to block scope
//     console.log(`Value of Number is : ${i}`);
//   }
// })();
// console.log(i);
