// funtion () add number key to variable

let value1 = "";
let value2 ="";
let operator = "";

let keyPress = window.addEventListener('keypress', (e) => {
    let jsdf = document.getElementById("screen").textContent;
    
    if (/[0-9]/.test(Number(e.key))) {
        return value1 = document.getElementById("screen").innerHTML = jsdf + e.key;
    }  
}) 

let operation = window.addEventListener("keypress", (e) => {
    if(e.key === "+") {
        console.log(e.key)
        document.getElementById("screen").innerText = "";
        return operator = e.key;
    }
})



function sum (value1, value2) {
    return value1 + value2;
}
// if number key is pressed and operator === ""
    // add to what is stored in the first value

// else if operator === "+"
    // call sum function

// else if operator is pressed
    // change the operator variable
    // prepare for second value to be insrted
    
// else if operator === "="
    // call function based in the operator variable

// function () change operator
