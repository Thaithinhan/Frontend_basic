let btn = document.getElementsByClassName("button");
// console.log(btn);
let input = document.getElementById("result");
// console.log(input);
for (let button of btn) {
  //   console.log(button);
  button.addEventListener("click", function show() {
    let value = this.innerText;
    if (value == "CE") {
      input.value = 0;
      //  console.log(value);
    } else {
      if (value == "") {
        if (input.value == 0) {
          input.value = 0;
        } else {
          input.value = input.value.slice(0, input.value.length - 1);
        }
      }
      if (input.value == 0) {
        if (value == "*" || value == "/" || value == "=") {
          input.value = 0;
        } else {
          input.value = value;
        }
      } else {
        if (value == "=") {
          let cal = eval(input.value);
          input.value = cal;
        } else {
          input.value += value;
        }
      }
    }
  });
}
