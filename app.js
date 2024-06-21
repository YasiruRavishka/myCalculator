const lightTheme = "style/light.css";
const darkTheme = "style/dark.css";
let displayText = "";
let outputResult = 0;
document.getElementById("displayArea").readOnly = true; //locked displayArea

function display() {
  document.getElementById("displayArea").value = displayText;
}
function calc() {}
function btnInput(value) {
  let tempValue = "";
  switch (value) {
    case "+":
      break;
    case "-":
      break;
    case "*":
      break;
    case "/":
      break;
    case ".":
      break;
    case 0:
      if (tempValue.startsWith("0",0)) {
        break;
      }
      tempValue += value;
      break;
    default:
      tempValue += value;
      break;
  }
  displayText
  display();
}
function btnDelete() {
  displayText = displayText.slice(0, displayText.length - 1);
  display();
}
function btnClear() {
  displayText = "0";
  display();
}
function changeTheme() {
  let currentTheme = document.getElementById("pageTheme").getAttribute("href");
  if (currentTheme == darkTheme) {
    document.getElementById("pageTheme").setAttribute("href", lightTheme);
    document.getElementById("btnTheme").innerHTML = "☀️";
  } else {
    document.getElementById("pageTheme").setAttribute("href", darkTheme);
    document.getElementById("btnTheme").innerHTML = "🌙";
  }
}
