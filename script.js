const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
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
        selectedOperator = button.textContent;
        upperDisplay.innerHTML += selectedOperator;
        lowerDisplay.innerHTML += selectedOperator;
        lowerDisplay.textContent = "";
        console.log(selectedOperator);
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

equalsButton.addEventListener('click', () => {
    const firstOperand = parseFloat(upperDisplay.textContent);
    console.log(firstOperand);
    const secondOperand = parseFloat(lowerDisplay.textContent);
    console.log(secondOperand);
   
   

   
    let result; 

    switch(selectedOperator) {
        case "+":
            result = add(firstOperand, secondOperand);
            break;
        case "-":
            result = subtract(firstOperand, secondOperand);
            break;
        case "*":
            result = multiply(firstOperand, secondOperand);
            break;
       case "÷":
            result = divide(firstOperand, secondOperand);
            break;

    }
    console.log("final operator", selectedOperator);
    lowerDisplay.textContent = result;
    console.log(result);
})


//equalsButton.addEventListener('click', oprate());




function add(firstOperand, secondOperand){
    
    return firstOperand + secondOperand;

}
function subtract(firstOperand, secondOperand){
    return firstOperand - secondOperand;
}

function multiply(firstOperand, secondOperand){
   return firstOperand * secondOperand;
}
function divide(firstOperand, secondOperand){
   

    if(secondOperand === 0){
        lowerDisplay.textContnet = "Error";
        
    } else{
        return firstOperand / secondOperand;
    }
}


//console.log(divide(1, 4));