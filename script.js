const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const upperDisplay = document.querySelector('[data-upper-display]');
const lowerDisplay = document.querySelector('[data-lower-display]');


let selectedOperator = '';
let firstOperand = '';
let secondOperand = '';

////////// NUMBER BTNS \\\\\\\\\\

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        lowerDisplay.textContent += button.textContent;
    });
});


////////// OPERATE BTN \\\\\\\\\\

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (selectedOperator !== '') {
            operate();
        }
        selectedOperator = button.textContent;
        firstOperand = lowerDisplay.textContent;
        upperDisplay.textContent = firstOperand + ' ' + selectedOperator;
        lowerDisplay.textContent = '';
    });
});

////////// DELETE BTN \\\\\\\\\\ 

deleteButton.addEventListener('click', () => {
    const currentContent = lowerDisplay.textContent;
    const newContent = currentContent.slice(0, -1);
    lowerDisplay.textContent = newContent;
});

allClearButton.addEventListener('click', () => {
    upperDisplay.textContent = '';
    lowerDisplay.textContent = '';
    
    selectedOperator = '';
    firstOperand = '';
    secondOperand = '';
});


/////////// OPERATE FUNC \\\\\\\\\\
function operate() {
    if (selectedOperator && firstOperand && lowerDisplay.textContent) {
        secondOperand = lowerDisplay.textContent;
        const result = calculate(
            parseFloat(firstOperand),
            parseFloat(secondOperand),
            selectedOperator
        );
        upperDisplay.textContent = '';
        lowerDisplay.textContent = result.toString();
        firstOperand = result.toString();
        selectedOperator = '';
    }
}

////////// CALCULATION FUNC \\\\\\\\\\

function calculate(prev, curr, operator) {
    switch (operator) {
        case '+':
            return prev + curr;
        case '-':
            return prev - curr;
        case '*':
            return prev * curr;
        case '/':
            if (curr === 0) {
                return 'Error';
            }
            return prev / curr;
        default:
            return 'Error';
    }
}

////////// EQUALS BTN \\\\\\\\\\ 

equalsButton.addEventListener('click', () => {
    operate();
});