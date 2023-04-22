let a = '';
let b = '';
let operator = '';

const displayBox = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        setInputVariables(button);
        displayInput();
        evaluateEquation (button);
        });
});

function setInputVariables(button) {
    if (button.className === 'number-button' && operator === '') {
        return a = (a === operate()) ? a = button.textContent : a += button.textContent;
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

function evaluateEquation (button) {
    if (button.className === 'equal-button') {
        displayOutput(operate());
        a = operate();
        b = '';
        operator = '';
    };
};

function displayInput() {
    displayBox.textContent = `${a} ${operator} ${b}`;
};

function displayOutput(result) {
    displayBox.textContent = `${result}`;
};

function operate() {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return a;
    };
};

function add() {
    return +a + +b;
};

function subtract() {
    return a - b;
};

function multiply() {
    return a * b;
};

function divide() {
    return a / b;
};
