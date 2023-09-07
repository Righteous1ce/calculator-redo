const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const upperDisplay = document.querySelector('[data-upper-display]');
const lowerDisplay = document.querySelector('[data-lower-display]');



let calcString = '';
let selectedOperator = '';


numberButtons.forEach((button => {
    button.addEventListener('click', () =>{
        
        upperDisplay.innerHTML += button.textContent;
        lowerDisplay.innerHTML += button.textContent;
        calcString += button.textContent;
       
       
    })
}));

operatorButton.forEach((button => {
    button.addEventListener('click', () =>{
        selectedOperator = button.textContent;
        calcString += selectedOperator;
        upperDisplay.innerHTML += selectedOperator;
        lowerDisplay.innerHTML += selectedOperator;
        lowerDisplay.textContent = '';
        
    })
}));


allClearButton.forEach(button => {
    button.addEventListener('click', () => {
        upperDisplay.textContent = '';
        lowerDisplay.textContent = '';
        calcString = '';
       
    
    })
});


deleteButton.forEach(button => {
    button.addEventListener('click', () => {
        let currentContent = lowerDisplay.textContent;
        let previousContent = upperDisplay.textContent;
        previousContent = previousContent.slice(0, -1);
        currentContent = currentContent.slice(0, -1);
        calcString = previousContent;
       
        upperDisplay.textContent = previousContent;
        lowerDisplay.textContent = currentContent;
        
    })
});

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(calcString); // Use eval() for evaluation
        lowerDisplay.textContent = result;
        calcString = result.toString(); // Update currentInput with the result
    } catch (error) {
        lowerDisplay.textContent = 'Error';
    }
    upperDisplay.textContent = '';
});


/*
equalsButton.addEventListener('click', () => {
    
    let first = parseFloat(upperDisplay.textContent);
    let second = parseFloat(lowerDisplay.textContent);
    
    if(isNaN(first) || isNaN(second)){
        lowerDisplay.textContent = 'Error';
    }
   
    let result; 
    if(selectedOperator === '÷' && second === 0){ // can be in switch statement 
        return lowerDisplay.textContent = 'Error';

    } else {

        switch(selectedOperator) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "*":
                result = first * second;
                break;
           case "÷":
                result = first / second;
                break;
            default:
                return;
    
        }





    }
  
    
    lowerDisplay.textContent = result;
    console.log(result);
    
});



*/