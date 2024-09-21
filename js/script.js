let number1 = 0;
let number2 = 0;
let operator = "";
let text = "";

function Number(number) {
    if (text.length < 13) {
        if (operator == "") {
            number1 = number1 * 10 + number;
        }
        else {
            number2 = number2 * 10 + number;
        }
        UpdateText();
    }
}

function Clear() {
    number1 = 0;
    operator = "";
    number2 = 0;
    UpdateText();
}

function Back() {
    if (number2 != 0) {
        number2 = Math.floor(number2 / 10);
    }
    else if (operator != "") {
        operator = "";
    }
    else {
        number1 = Math.floor(number1 / 10);
    }
    UpdateText();
}

function Multiply() {
    if (text.length < 13) {
        if (operator == "") {
            operator = "x";
            UpdateText();
        }
    }
}

function Divide() {
    if (text.length < 13) {
        if (operator == "") {
            operator = ":";
            UpdateText();
        }
    }
}

function Plus() {
    if (text.length < 13) {
        if (operator == "") {
            operator = "+";
            UpdateText();
        }
    }
}

function Minus() {
    if (text.length < 13) {
        if (operator == "") {
            operator = "-";
            UpdateText();
        }
    }
}

function Equal() {
    if (operator == "x") {
        number1 = number1 * number2;
        operator = "";
        number2 = 0;
    }
    else if (operator == ":") {
        number1 = number1 / number2;
        operator = "";
        number2 = 0;
    }
    else if (operator == "+") {
        number1 = number1 + number2;
        operator = "";
        number2 = 0;
    }
    else if (operator == "-") {
        number1 = number1 - number2;
        operator = "";
        number2 = 0;
    }
    UpdateText();
}

function UpdateText() {
    if (number2 == 0) {
        text = number1 + operator;
    }
    else {
        text = number1 + operator + number2;
    }
    if (text.length == 0) {
        text = "0";
    }
    document.getElementById("text").innerText = text;
}