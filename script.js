
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const equalsButton = document.querySelectorAll('[data-equals]')
const upperDisplay = document.querySelector('[data-upper-display]');
const lowerDisplay = document.querySelector('[data-lower-display]');




//console.log(operate(firstOperand, operator, secondOperand));



numberButtons.forEach((button => {
    button.addEventListener('click', () =>{
        console.log(button);
    })
}))

operatorButton.forEach((button => {
    button.addEventListener('click', () =>{
        console.log(button);
    })
}))

function add(firstOperand, secondOperand){
    return firstOperand + secondOperand;
}
function subtarct(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}
function multiply(firstOperand, secondOperand){
    return firstOperand * secondOperand;
}
function divide(firstOperand, secondOperand){
    return firstOperand / secondOperand;
}