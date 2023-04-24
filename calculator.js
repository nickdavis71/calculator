let a = '';
let b = '';
let operator = '';
let equationEvaluated = false;

const displayBox = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach (button => {
    button.addEventListener('click', () => {
        setButtonFunction (button);
        displayInput ();
        evaluateEquation (button);
        });
});

function setButtonFunction (button) {
    if (button.className === 'number-button' && operator === '') {
        if (equationEvaluated === true) {
            equationEvaluated = false;
            a = button.textContent;
            return a;
        } else {
            a += button.textContent;
            return a;
        };
    };    
    if (button.className === 'operator-button') {
        operator = button.textContent;
        return operator;
    };
    if (button.className === 'number-button') {
        b += button.textContent;
        return b;
    };    
    if (button.className === 'sign-button') {
        changeSign ();
    };
    if (button.className === 'clear-button') {
        a = '';
        b = '';
        operator = '';
    };
    if (button.className === 'delete-button') {
        backSpace ();
    };
    return;
};

function evaluateEquation (button) {
    if (button.className === 'equal-button') {
        equationEvaluated = true;
        displayOutput(operate ());
        setResultAsInput ();
    };
};

function setResultAsInput () {
    a = operate ();
    b = '';
    operator = '';
};

function backSpace () {
    if (b) { 
        b = b.slice(0, -1)
    } else if (operator) {
        operator = operator.slice(0, -1)
    } else if (a) { 
        a = a.slice(0, -1);
    };
};

function changeSign () {
    if (b) { 
        b = (b === b) ? -b : b;
        b = b.toString();
    } else if (a) { 
        a = (a === a) ? -a : a;
        a = a.toString();
    };  
}

function displayInput () {
    displayBox.textContent = `${a} ${operator} ${b}`;
};

function displayOutput (result) {
    result = Math.round((result + Number.EPSILON) * 1000) / 1000;
    displayBox.textContent = `${result}`;
};

function operate () {
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

function add () {
    return +a + +b;
};

function subtract () {
    return a - b;
};

function multiply () {
    return a * b;
};

function divide () {
    return a / b;
};
