// Show điểm trung bình
let mark_t, mark_v, mark_h;
mark_v = +prompt("Nhập điểm Lý củ bạn");
mark_t = +prompt("Nhập điểm Toán củ bạn");
mark_h = +prompt("Nhập điểm Hoá củ bạn");
let avg_mark = (mark_h + mark_t + mark_v) / 3;
document.getElementById("show_avg_mark").innerHTML += avg_mark;
// Đổi nhiệt độ C sang F
// let C_degree = prompt("Nhập vào độ C");
// let F_degree = (C_degree * 9) / 5 + 32;
// document.getElementById("change_degree").innerHTML += F_degree;
// Tính diện tích hình tròn
// let r = prompt("Nhập vào bán kính hình tròn");
// let perimeter = Math.pow(r, 2) * Math.PI;
// document.getElementById("perimeter").innerHTML += ` ${perimeter}`;
