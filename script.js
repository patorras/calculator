;


function add (value1, value2) {
    return value1 + value2;
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

}



// lets try, do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable1

// when +-*/ is pressed do a while loop, that while +-*/.= are not pressed just contenate the number string to the variable2,

// press another button and stores the second number

// press one of the symbols to calculate the two numbers and stores it