let convert = document.getElementById("convert");
let amount = document.getElementById("amount");
console.log(amount);

let from_cur = document.getElementById("from_cur");
let to_cur = document.getElementById("to_cur");
let result = document.getElementById("result");
// console.log(result);
convert.onclick = function change_currency(e) {
  //   alert("change");
  e.preventDefault();
  // let currency = parseFloat(amount.value);
  // console.log(111111, currency * 3);
  if (from_cur.value == "0" && to_cur.value == "2") {
    let currency = parseFloat(amount.value) / 24000;
    //     console.log(currency);
    result.innerText = `Số tiền quy đổi $ ${currency}`;
  }
  if (from_cur.value == "0" && to_cur.value == "3") {
    let currency = parseFloat(amount.value);
    //     console.log(currency);
    result.innerText = `Số tiền quy đổi VNĐ ${currency}`;
  }
  if (from_cur.value == "1" && to_cur.value == "3") {
    let currency = parseFloat(amount.value) * 24000;
    //     console.log(currency);
    result.innerText = `Số tiền quy đổi VNĐ ${currency}`;
  }
  if (from_cur.value == "1" && to_cur.value == "2") {
    let currency = parseFloat(amount.value);
    //     console.log(currency);
    result.innerText = `Số tiền quy đổi $ ${currency}`;
  }
};
