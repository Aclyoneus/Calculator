const inputWindow = document.querySelector('.input-window');
const calculatorButtons = document.querySelectorAll('.calculator-button');

const currentNumber = calculatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        inputWindow.value = button.innerText;
    })
})