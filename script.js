// TO DO    result can have only 2 decimal houses

let previousValue = "";
let currentValue ="";
let operator = "";
let result ="";

let operatorButtons = document.querySelectorAll("[data-action]");
let numberButtons = document.querySelectorAll("[data-number]");
let aEqualButton = document.getElementById("equalButton");
let acClearButton = document.getElementById("clearButton");
let aDeleteButton = document.getElementById("deleteButton");  

// click number key (0–9) and comma, pressing buttons
let keyPress = window.addEventListener('keypress', (e) => {
  let screenTextContent = document.getElementById("screen").textContent;
  
  if (/[0-9]/.test(Number(e.key)) || e.key === ".") {

      // does not allow more than one "." decimal
      if (e.key === "." && screenTextContent.includes('.')) {
          return;
      }

      else if(operator === "") {
          return currentValue = document.getElementById("screen").innerHTML = screenTextContent + e.key;
      }
      else if (operator === "+" ||operator === "-" || operator === "*" || operator === "/") {
          
          return currentValue = document.getElementById("screen").innerHTML = screenTextContent + e.key;
      }
      
  }  
}) 

// click number key (0–9) and comma, clicking buttons
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    // check if the string has more than one comma, and do not allow more than one
    if (button.innerText === "." && currentValue.includes(".")) {
      return
    }
    // add the number to the end of the current number string
    currentValue = currentValue.toString() + button.innerText;
    // update the screen
    updateDisplay() 
    console.log(currentValue)
  })
})
  

// function to better format number, comma for thousands
function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0])
  const decimalDigits = stringNumber.split(".")[1]
  
  let integerDisplay

  if (isNaN(integerDigits)) {
      integerDisplay = ""
  }
  else {
      integerDisplay = integerDigits.toLocaleString("en", {maximumFractionDigits: 0})
  }
 
  if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits.slice(0,2)}`
  }
  else {
      return integerDisplay;
  }
} 


// create a update displya function
function updateDisplay() {
  
  if (isFinite(currentValue)) {
    document.getElementById("screen").innerText = getDisplayNumber(currentValue);
  }
  else {
    document.getElementById("screen").innerText = "ERROR... Not possible to divide by 0..."
  }
  

  if (operator != null) {
    document.getElementById("previousScreen").innerText = 
      `${getDisplayNumber(previousValue)} ${operator}`
      
  }
  else {
    document.getElementById("previousScreen").innerText = ""; 
  }
}

function clear() {
  // reset all variables, current number, previous number and operator
  currentValue = "";
  previousValue = "";
  operator = "";
  // and clear the main screen and secondary screen
  updateDisplay();
}


function compute() {
  let computation;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(current)) {
    return;
  }

  switch (operator) {
    case "+" :
      computation = prev + current;
      break;
     
    case "-" :
      computation = prev - current;
      break;

    case "*" :
      computation = prev * current;
      break;

    case "÷" :
      computation = prev / current;
      break;
    
    default:
      return;
  }

  currentValue = computation;
  operator = undefined;
  previousValue = "";

}
    

function chooseOperation(operation) {
  if (currentValue === "") {
    return;
  }
  
  if (previousValue !== "") {
    compute();
  }
  
  operation = operator;
  previousValue = currentValue;
  currentValue = "";
}

// click operator
operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    operator = button.innerText;
    console.log(button.innerText)
    updateDisplay();
    
  })
})

let operation = window.addEventListener("keypress", (e) => {
  if(e.key === "+" ||e.key === "-" || e.key === "*" || e.key === "/") {
    chooseOperation(e.key);
    operator = e.key;
    updateDisplay();
  }
})
  // check if there's already a operator selected if exist calculate the operation using the previous operator????????? 
  // when clicked the previous number becames equal to the current number, and current number is equal to empty string
  // populate the secondary screen with the previous number and the current operator
  // update the screen 

// click equal
let equal = window.addEventListener("keypress", (e) => {
  if (e.key === "=" || e.key === "Enter") {

    if (previousValue === "" || currentValue === "") {
      document.getElementById("screen").innerText = "ERROR We Need 2 Values"
    }
    else {
      compute()
      updateDisplay();
    }
  }
})

aEqualButton.addEventListener("click", button => {
  if (previousValue === "" || currentValue === "") {
    document.getElementById("screen").innerText = "ERROR We Need 2 Values"

  }
  else {
    compute()
    updateDisplay();
  }
  
})
  // do the operation in the operator variable,
  // we need to have a previous number and a current number
  // clear the secondary screen and update the main screen
  // update the operator value to a empty string

// click delete
aDeleteButton.addEventListener("click", button => {
  // delete the last character of the current number
  currentValue = currentValue.toString().slice(0, -1);
    // update screen
  updateDisplay();
})
  
 

// click AC
acClearButton.addEventListener("click", button => {
  clear();
})
  


let clearKeyboard = window.addEventListener("keydown", (e) => {
  if(e.key === "Delete") {
      document.getElementById("screen").innerText = "";
      currentValue = "";
      previousValue = "";
      operator = "";
      result = "";
  }
  else if (e.key === "Backspace") {
      console.log(e);
      
      let val = document.getElementById("screen").textContent.slice(0, -1);
      document.getElementById("screen").innerHTML = val;
      if(operator === "") {
          return currentValue = val;
      } 
      else if (operator === "+" ||operator === "-" || operator === "*" || operator === "/") {
          return currentValue = val;
      }
  }
})


