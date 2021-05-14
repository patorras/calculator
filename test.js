// funtion () add number key to variable

let value1 = "";
let value2 ="";
let operator = "";
let result ="";

// if number key is pressed and operator === ""
    // add to what is stored in the first value
let keyPress = window.addEventListener('keypress', (e) => {
    let jsdf = document.getElementById("screen").textContent;
    
    if (/[0-9]/.test(Number(e.key)) || e.key === ".") {

        if(operator === "") {
            return value1 = document.getElementById("screen").innerHTML = jsdf + e.key;
        }
        else if (operator === "+" ||operator === "-" || operator === "*" || operator === "/") {
                
            return value2 = document.getElementById("screen").innerHTML = jsdf + e.key;
        }
        
    }  
}) 

function calculateValue() {
    if (result != "" && operator === "+") {
        document.getElementById("screen").innerHTML = sum(result, value2)
    }
    else if (operator === "+") {
        document.getElementById("screen").innerHTML = sum(value1, value2)
    }
    else if (result != "" && operator === "-") {
        document.getElementById("screen").innerHTML = sub(result, value2)
    }
    else if (operator === "-") {
        document.getElementById("screen").innerHTML = sub(value1, value2)
    }
    else if (result != "" && operator === "*") {
        document.getElementById("screen").innerHTML = mult(result, value2)
    }
    else if (operator  === "*") {
        document.getElementById("screen").innerHTML = mult(value1, value2)
    }
    else if (result != "" && operator === "/") {
        document.getElementById("screen").innerHTML = division(result, value2)
    }
    else if (operator === "/") {
        document.getElementById("screen").innerHTML = division(value1, value2)
    }
}

// function () change operator
let operation = window.addEventListener("keypress", (e) => {
    if(e.key === "+" ||e.key === "-" || e.key === "*" || e.key === "/") {

        calculateValue();

        document.getElementById("screen").innerText = "";
 
        return operator = e.key;
    }
    
})

// clear and backspace funtions
let clear = window.addEventListener("keydown", (e) => {
    if(e.key === "Delete") {
        document.getElementById("screen").innerText = "";
        value1 = "";
        value2 = "";
        operator = "";
        result = "";
    }
    else if (e.key === "Backspace") {
        console.log(e);
        
        let val = document.getElementById("screen").textContent.slice(0, -1);
        document.getElementById("screen").innerHTML = val;
        if(operator === "") {
            return value1 = val;
        } 
        else if (operator === "+" ||operator === "-" || operator === "*" || operator === "/") {
            return value2 = val;
        }
    }
})

function sum (value1, value2) {
    result = Number(value1) + Number(value2);
    return result;
}

function sub (value1, value2) {
    result = Number(value1) - Number(value2);
    return result;
}

function mult (value1, value2) {
    result = Number(value1) * Number(value2);
    return result;
}

function division (value1, value2) {
    let resultDivision = Number(value1) / Number(value2);
    if(Number(resultDivision) === resultDivision && resultDivision % 1 !== 0) {
        return resultDivision.toFixed(2);
    }
    result = resultDivision;
    return result;
}

//else if operator === "="
// call function based in the operator variable
let equal = window.addEventListener("keypress", (e) => {
    if (e.key === "=" || e.key === "Enter") {
        //if operator === "+"
        // call sum function
        calculateValue();
        
    }
})




// else if operator is pressed
    // change the operator variable
    // prepare for second value to be insrted
    
// 


