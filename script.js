// Local & Global Scope Function

//Block Scope:
// {
//   let val = 2;
//   console.log(val);
// }

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
