const inputWindow = document.querySelector('.input-window');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.delete-button');
const resetButton = document.querySelector('.reset-button');
const dotButton = document.querySelector('.dot-button');
const equalsButton = document.querySelector('.equals-button');

let firstNumberAsString = '';
let secondNumberAsString = '';
let actionToPerform = null;
const errorMessage = 'ERROR';

function getEquationResult(actionToPerform, firstNumber, secondNumber) {
    let equationResult;
    if (actionToPerform === '+') {
        equationResult = firstNumber + secondNumber;
    }
    if (actionToPerform === '-') {
        equationResult = firstNumber - secondNumber;
    }
    if (actionToPerform === '*') {
        equationResult = firstNumber * secondNumber;
    }
    if (actionToPerform === '/' && secondNumber !== 0) {
        equationResult = firstNumber / secondNumber;
    } else if (actionToPerform === '/' && secondNumber === 0) {
        return errorMessage;
    }
    return equationResult;
}

function refreshInput() {
    inputWindow.value = `${firstNumberAsString}${actionToPerform || ''}${secondNumberAsString}`;
}

if (resetButton) {
    resetButton.addEventListener('click', function() {
        inputWindow.value = '';
        firstNumberAsString = '';
        secondNumberAsString = '';
        actionToPerform = null;
    });
}

if (deleteButton) {
    deleteButton.addEventListener('click', function() {
        if (secondNumberAsString) {
            secondNumberAsString = secondNumberAsString.slice(0, -1);
        } else if (actionToPerform) {
            actionToPerform = null;
        } else {
            firstNumberAsString = firstNumberAsString.slice(0, -1);
        }
        refreshInput();
    })
}

if (numberButtons) {
    numberButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (actionToPerform !== null) {
                if (secondNumberAsString === '0' && button.innerText === '0') {
                    return;
                }
                secondNumberAsString = secondNumberAsString + button.innerText;
            } else {
                if (firstNumberAsString === '0' && button.innerText === '0') {
                    return;
                }
                firstNumberAsString = firstNumberAsString + button.innerText;
            }
            refreshInput();
        })
    })
}

if (dotButton) {
    dotButton.addEventListener('click', function() {
        if (actionToPerform === null && !firstNumberAsString.includes('.')) {
            firstNumberAsString = firstNumberAsString + dotButton.innerText;
        } else if (!secondNumberAsString.includes('.')) {
            secondNumberAsString = secondNumberAsString + dotButton.innerText;
        }
        refreshInput();
    })
}

if (operatorButtons) {
    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            if (inputWindow.value.includes(operatorButtons.innerText)) {
                return;
            } else {
                actionToPerform = button.innerText;
                refreshInput();
            }
        })
    })
}

if (equalsButton) {
    equalsButton.addEventListener('click', function() {
        const firstNumber = parseFloat(firstNumberAsString);
        const secondNumber = parseFloat(secondNumberAsString);
        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            equationResult = getEquationResult(actionToPerform, firstNumber, secondNumber);
            inputWindow.value = equationResult;
            firstNumberAsString = equationResult.toString();
            secondNumberAsString = '';
            actionToPerform = null;
        }
    })
}