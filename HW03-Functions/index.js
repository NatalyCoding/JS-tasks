let number = +prompt("Введіть багатозначне число")

function getMaxDigit(number) {
    if (isNaN(number)) {
        number = +prompt("Некоректні дані! Введіть багатозначне число");
    }
    console.log("Number is: " + number);
    let max = 0;
    let numberStr = number.toString();
    for (let i = 0; i < numberStr.length; i++) {
        if (max <= numberStr[i]) {
            max = numberStr[i];
        }
    }
    console.log("Max digit is: " + max);
    alert("Найбільша цифра в даному числі: " + max);
    return max;
}

getMaxDigit(number);