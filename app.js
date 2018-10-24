let clear = false;
let enteredNumbers = "";
let button = document.querySelector(".button");
let textbox = document.querySelector(".textbox");

document.onload(() => {
  button.addEventListener("click", calculateValue());
});
