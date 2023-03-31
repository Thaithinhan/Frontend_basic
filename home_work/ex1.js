function test_leapYear() {
  let year = Number(prompt("Enter your test year"));
  let isLeapYear = false;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  }
  if (isLeapYear) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is NOT a leap year");
  }
}
function test_answer() {
  let value = prompt('What is the "official" name of JavaScript?', "");
  if (value == "ECMAScript") {
    console.log("Right!");
  } else {
    console.log("You don't know? ECMAScript!");
  }
}
