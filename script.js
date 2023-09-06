const numberButtons = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelectorAll('[data-delete]');
const allClearButton = document.querySelectorAll('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const upperDisplay = document.querySelector('[data-upper-display]');
const lowerDisplay = document.querySelector('[data-lower-display]');





numberButtons.forEach((button => {
    button.addEventListener('click', () =>{
        number = button.textContent;
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
        
    })
})



equalsButton.addEventListener('click', () => {
    let first = parseFloat(upperDisplay.textContent);
    console.log("upper: ", upperDisplay);
    let second = parseFloat(lowerDisplay.textContent);
    console.log(second);
   
   
    let result; 
    if(selectedOperator === '÷' && second === 0){
        return lowerDisplay.textContent = "Error"

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
  
    console.log("final operator", selectedOperator);
    lowerDisplay.textContent = result;
    console.log(result);
})





