const inputWindow = document.querySelector('.input-window');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.delete-button');
const resetButton = document.querySelector('.reset-button');
const dotButton = document.querySelector('.dot-button');
const equalsButton = document.querySelector('.equals-button');

function addNumbers(a, b) {
    return a + b;
}
function subtractNumbers(a, b) {
    return a - b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function divideNumbers(a, b) {
    return a / b;
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
        })
    })
}


