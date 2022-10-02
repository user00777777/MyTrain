// let parTest = document.querySelector(".parTest");
// let num = +prompt("Введите произвольное число", "10");
// parTest.style.color = num < 50 ? "green" : "red";
// console.log();
let a = "This is a test string";
let b = "test";
function testStr(a, b) {
  return a.indexOf(b);
}
console.log(testStr(a, b));
