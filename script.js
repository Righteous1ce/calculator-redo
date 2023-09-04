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
        const number = button.textContent;
        upperDisplay.innerHTML += number;
        lowerDisplay.innerHTML += number;
       
    })
}))

operatorButton.forEach((button => {
    button.addEventListener('click', () =>{
        const operator = button.textContent;
        upperDisplay.innerHTML += operator;
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


console.log(add(1, 2));