const inputWindow = document.querySelector('.input-window');
const operatorButtons = document.querySelectorAll('.operator-button');
const numberButtons = document.querySelectorAll('.number-button');
const deleteButton = document.querySelector('.delete-button');
const resetButton = document.querySelector('.reset-button');
const dotButton = document.querySelector('.dot-button');
const equalsButton = document.querySelector('.equals-button');

if (resetButton) {
    resetButton.addEventListener('click', function() {
        inputWindow.value = '';
    });
}

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        inputWindow.value = button.innerText;
    })
})