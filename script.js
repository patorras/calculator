
let value1 = "";
let value2 = "";

function equal () {
    value2 = document.getElementById("screen").textContent;

    console.log(Number(value1) + Number(value2));
}

function add () {

    value1 = document.getElementById("screen").textContent;
    
    document.getElementById("screen").textContent = "";

    console.log(Number(value1));

    return value1;

    
    

}

function subtract (value1, value2) {
    return value1 - value2;
}

function multiply (value1, value2) {
    return value1 * value2;
}

function divide (value1, value2) {
    return value1 / value2;
}


// press a button, stores that number 

function buttonPress (number) {
    
    


    let second = document.getElementById("screen").textContent 

    document.getElementById("screen").innerHTML = "" + second + number;

    return Number(number);

}


// press +, stores the screen value into a variable, clears the screen, and runs 


// lets try, do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable1

// when +-*/ is pressed do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable2,

// press another button and stores the second number

// press one of the symbols to calculate the two numbers and stores it