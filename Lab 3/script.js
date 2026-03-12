const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            clearDisplay();
        } else if (action === "calculate") {
            calculateResult();
        } else if (value) {
            appendValue(value);
        }
    });
});


function appendValue(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch {
        display.textContent = "Error";
        currentInput = "";
    }
}