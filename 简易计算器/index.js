const display = document.getElementById("display");

//将按钮点击值追加到屏幕上
function appendToDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = "";
}

//eval（）为js内置函数，可以解析字符数字，但不安全，输入恶意代码会攻击破坏数据
function calculate() {
  try {
    display.value = eval(display.value)
  }
  catch (error) {
    display.value = "Error";
  }
}