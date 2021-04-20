
let value1 = "";
let value2 = "";

let result = "";

let operation = "";

function equal () {
    value2 = document.getElementById("screen").textContent;

    if (operation === "+") {
        result = Number(value1) + Number(value2);
    }
    else if (operation === "-") {
        result = Number(value1) - Number(value2);
    }

    document.getElementById("screen").innerHTML = result;

}

function add () {

    mid()

    operation = "+";
}

function subtract () {
    mid()

    operation = "-";

}

function multiply (value1, value2) {
    return value1 * value2;
}

function divide (value1, value2) {
    return value1 / value2;
}


// press a button, will keep on adding number to the right side of the screen

function buttonPress (number) {

    let second = document.getElementById("screen").textContent 

    document.getElementById("screen").innerHTML = "" + second + number;

    return Number(number);

}

// stores the fisrt value and clears the content on th screen
function mid () {
    value1 = document.getElementById("screen").textContent;
    
    document.getElementById("screen").textContent = "";

    return value1;
}

function clearButton () {
    document.getElementById("screen").textContent = "";
}

function deleteButton () {
    let a = document.getElementById("screen").textContent.slice(0, -1);

    return document.getElementById("screen").innerHTML = a;
}


// press +, stores the screen value into a variable, clears the screen, and runs 


// lets try, do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable1

// when +-*/ is pressed do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable2,

// press another button and stores the second number

// press one of the symbols to calculate the two numbers and stores it