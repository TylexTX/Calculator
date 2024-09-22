let number1 = 0;
let number2 = 0;
let operator = "";
let text = "";

function Number(number) {
    if (text.length < 14) {
        if (operator == "") {
            number1 = number1 * 10 + number;
        } else {
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
    } else if (operator != "") {
        operator = "";
    } else {
        number1 = Math.floor(number1 / 10);
    }
    UpdateText();
}

function Multiply() {
    if (text.length < 14) {
        if (operator == "") {
            operator = "x";
            UpdateText();
        }
    }
}

function Divide() {
    if (text.length < 14) {
        if (operator == "") {
            operator = ":";
            UpdateText();
        }
    }
}

function Plus() {
    if (text.length < 14) {
        if (operator == "") {
            operator = "+";
            UpdateText();
        }
    }
}

function Minus() {
    if (text.length < 14) {
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
    } else if (operator == ":") {
        number1 = number1 / number2;
        operator = "";
        number2 = 0;
    } else if (operator == "+") {
        number1 = number1 + number2;
        operator = "";
        number2 = 0;
    } else if (operator == "-") {
        number1 = number1 - number2;
        operator = "";
        number2 = 0;
    }
    UpdateText();
}

function UpdateText() {
    number1 = Math.round(number1);
    if (number2 == 0) {
        text = number1 + operator;
    } else {
        number2 = Math.round(number2);
        text = number1 + operator + number2;
    }
    if (text.length == 0) {
        text = "0";
    }
    document.getElementById("text").innerText = text;
}

/* document.addEventListener("keypress", function(event) {
    if (event.key === "*") {
        Multiply();
    } else if (event.key === "/") {
        Divide();
    } else if (event.key === "+") {
        Plus();
    } else if (event.key === "-") {
        Minus();
    } else if (event.key === "Enter") {
        Equal();
    } else if (event.key === "Backspace") {
        Back();
    } else if (event.key === "Escape") {
        Clear();
    } else if (event.key === "1") {
        Number(1);
    } else if (event.key === "2") {
        Number(2);
    } else if (event.key === "3") {
        Number(3);
    } else if (event.key === "4") {
        Number(4);
    } else if (event.key === "5") {
        Number(5);
    } else if (event.key === "6") {
        Number(6);
    } else if (event.key === "7") {
        Number(7);
    } else if (event.key === "8") {
        Number(8);
    } else if (event.key === "9") {
        Number(9);
    } else if (event.key === "0") {
        Number(0);
    }
}) */