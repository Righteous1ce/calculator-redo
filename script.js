const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const equalsButton = document.querySelectorAll('[data-equals]')
const upperDisplay = document.querySelector('[data-upper-display]');
const lowerDisplay = document.querySelector('[data-lower-display]');





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
        lowerDisplay.innerHTML += operator;
        lowerDisplay.textContent = "";
    })
}))


allClearButton.forEach(button => {
    button.addEventListener('click', () => {
        upperDisplay.textContent = "";
        lowerDisplay.textContent = "";
        console.log("all clear");
    })
});


deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        let currentContent = lowerDisplay.textContent;
        let previousContent = upperDisplay.textContent;
        previousContent = previousContent.slice(0, -1);
        currentContent = currentContent.slice(0, -1);
        upperDisplay.textContent = previousContent;
        lowerDisplay.textContent = currentContent;
        console.log("delete")
    })
})



//equalsButton.addEventListener('click', oprate());




function add(firstOperand, secondOperand){
    lowerDisplay.textContent = firstOperand + secondOperand;
    return lowerDisplay.textContent;

}
function subtract(firstOperand, secondOperand){
    lowerDisplay.textContent = firstOperand - secondOperand;
    return lowerDisplay.textContent;
}
function multiply(firstOperand, secondOperand){
    lowerDisplay.textContent = firstOperand * secondOperand;
    return lowerDisplay.textContent;

}
function divide(firstOperand, secondOperand){
    lowerDisplay.textContent = firstOperand / secondOperand;

    if(secondOperand === 0){
        lowerDisplay.textContent = "Error";
    } else{
        return lowerDisplay.textContent;
    }
}


console.log(divide(1, 4));