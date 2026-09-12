let display = document.getElementById("display");

function press(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText =
            display.innerText.slice(0, -1);
    }
}

function percentage() {
    let value = parseFloat(display.innerText);
    display.innerText = value / 100;
}

function calculate() {
    try {
        let expression = display.innerText;

        let result = eval(expression);

        display.innerText = result;
    }
    catch {
        display.innerText = "Error";
    }
}
