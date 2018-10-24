let clear = false;
let enteredNumbers = "";

window.addEventListener("DOMContentLoaded", () => {
  let buttons = document.querySelectorAll(".btn");
  let textbox = document.getElementById("textbox");

  buttons.forEach(butt =>
    butt.addEventListener("click", () => {
      let val = butt.value;

      if (
        parseInt(val) == val ||
        val === "." ||
        val === "/" ||
        val === "*" ||
        val === "-" ||
        val === "+" ||
        val === "%"
      ) {
        if (clear === false) {
          enteredNumbers += val;
          textbox.value = enteredNumbers;
          textbox.innerText = textbox.value;
        } else {
          enteredNumbers = val;
          textbox.value = enteredNumbers;
          clear = false;
        }
      }

      if (val === "CE") {
        enteredNumbers = "";
        textbox.value = "";
      } else if (val === "C") {
        enteredNumbers = enteredNumbers.slice(0, -1);
        textbox.value = enteredNumbers;
      } else if (val === "=") {
        textbox.value = eval(enteredNumbers);
        clear = true;
      }
    })
  );
});
