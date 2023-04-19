let a = '';
let b = '';
let operator = '';

const displayBox = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const equalButton = document.querySelector('.equal-button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        setInputVariables(button);
        displayInput(a, b, operator);
        if (button.className === 'equal-button') {
            displayOutput(operate(a, b, operator))
        };
//        console.log(a);
//        console.log(b);
//       console.log(operator);
        });
});

function setInputVariables(button) {
    console.log(button.className)
    if (button.className === 'number-button' && operator === '') {
        a += button.textContent;
        return a;
    };    
    if (button.className === 'operator-button') {
        operator = button.textContent;
        return operator;
    };
    if (button.className === 'number-button') {
        b += button.textContent;
        return b;
    };
    return;
};

function displayInput(a, b, operator) {
    displayBox.textContent = `${a} ${operator} ${b}`;
};

function displayOutput(result) {
    displayBox.textContent = `${result}`;
};

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    };
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};
