const inputWindow = document.querySelector('.input-window');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.delete-button');
const resetButton = document.querySelector('.reset-button');
const dotButton = document.querySelector('.dot-button');
const equalsButton = document.querySelector('.equals-button');

let firstNumberAsString = null;
let secondNumberAsString = null;
let actionToPerform = null;

function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtractNumbers(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiplyNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divideNumbers(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

if (resetButton) {
    resetButton.addEventListener('click', function() {
        inputWindow.value = '';
    });
}

if (deleteButton) {
    deleteButton.addEventListener('click', function() {
        inputWindow.value = inputWindow.value.slice(0, -1);
    })
}

if (numberButtons) {
    numberButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            inputWindow.value = inputWindow.value + button.innerText;
            firstNumberAsString = firstNumberAsString + inputWindow.value;
        })
    })
}

if (dotButton) {
    dotButton.addEventListener('click', function() {
        if (inputWindow.value.includes('.')) {
            return;
        }
        inputWindow.value = inputWindow.value + dotButton.innerText;
    })
}

if (operatorButtons) {
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            inputWindow.value = inputWindow.value + button.innerText;
            actionToPerform = inputWindow.value;
        })
    })
}

if (equalsButton) {
    equalsButton.addEventListener('click', function() {

    })
}


