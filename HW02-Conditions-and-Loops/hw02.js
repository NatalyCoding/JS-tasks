/* Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК! */
let n = Number(prompt("Enter a Number!"));

/* Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить) */
// if (isNaN(n))

/* Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК! */
let m = Number(prompt("Enter one more number!"));

/* Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходить) */
// if (isNaN(m))

/* Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
Напишіть цикл, який буде складати числа від раніше отриманих N и M */
let action = confirm("Should we pass even numbers?");
console.log(action);
/* В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми. */
//if(action === true){}
//else {n+m}
/* Виведіть результат */
function findSum(n, m, action) {
    let result;

    if (isNaN(n) || n === null) {
        n = 0;
    }
    if (isNaN(m) || m === null) {
        // prompt "введіть ціле число?"
        m = 0;
    }
    if (action === true) {
        if (n % 2 == 0) {
            n = 0;
        }
        if (m % 2 == 0) {
            m = 0;
        }
        result = n + m;
        console.log("if section result: " + result);
        // return result; -?
    } else {
        result = n + m;
        console.log("else section result: " + result);

    }
    console.log(result);
    alert(`The sum of two numbers is ${result}.`);
    // prompt("Do you want to try again?");
    console.log(`The result is ${result}`);

    return result;
}
findSum(n, m, action);