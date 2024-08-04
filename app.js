const lightTheme = "style/light.css";
const darkTheme = "style/dark.css";
const displayText = document.getElementById("displayArea");
displayText.readOnly = true; //locked displayArea
let resetStatus = false;
let isDecimalNumber = false;
let digitCount = 0;

function calc() {
  let result;
  try {
    result = eval(displayText.value);
    if (!isFinite(result)) {  //check NaN, Infinity
      throw SyntaxError;
    }
    if (Number.isInteger(result)) { //check float or integer
      isDecimalNumber = false;
    } else {
      isDecimalNumber = true;
    }
  } catch (SyntaxError) {
    result = "Invalid";
    resetStatus = true;
  } finally {
    displayText.value = result;
    digitCount = displayText.value.length - 1;
  }
}

function btnInput(value) {
  if (resetStatus) {
    btnClear();
  }
  switch (value) {
    case "+":
    case "-":
    case "*":
    case "/":
      let array = ["+", "-", "*", "/"];
      array.forEach((operators) => {
        if (displayText.value.endsWith(operators) || displayText.value.endsWith(".")) {
          displayText.value = displayText.value.slice(0, displayText.value.length - 1);
          digitCount--;
        }
      });
      displayText.value += value;
      isDecimalNumber = false;
      digitCount = 0;
      break;
    case ".":
      if (isDecimalNumber) {
        break;
      }
      if (digitCount == 0 && displayText.value != "0") {
        displayText.value += "0";
        digitCount++;
      }
      displayText.value += ".";
      isDecimalNumber = true;
      digitCount++;
      break;
    case 0:
      if (displayText.value[displayText.value.length - 1] == "0" && digitCount <= 1) {
        break;
      }
      displayText.value += "0";
      digitCount++;
      break;
    default:
      if (displayText.value == "0") {
        displayText.value = value;
      } else {
        displayText.value += value;
      }
      digitCount++;
      break;
  }
}

function btnDelete() {
  if (displayText.value.length > 1) {
    if (digitCount == 0) {
      return;
    }
    if (displayText.value[displayText.value.length - 1] == ".") {
      isDecimalNumber = false;
    }
    displayText.value = displayText.value.slice(0, displayText.value.length - 1);
    digitCount--;
  } else {
    btnClear();
  }
}

function btnClear() {
  displayText.value = "0";
  resetStatus = false;
  isDecimalNumber = false;
  digitCount = 0;
}

function changeTheme() {
  let pageTheme = document.getElementById("pageTheme");
  if (pageTheme.getAttribute("href") == darkTheme) {
    pageTheme.setAttribute("href", lightTheme);
    document.getElementById("btnTheme").innerHTML = "☀️";
  } else {
    pageTheme.setAttribute("href", darkTheme);
    document.getElementById("btnTheme").innerHTML = "🌙";
  }
}
