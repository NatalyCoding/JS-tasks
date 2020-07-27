/* Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК! */
let n = parseInt(prompt("Enter a Number!"));

/* Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить) */
// if (isNaN(n))

/* Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК! */
let m = parseInt(prompt("Enter one more number!"));

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
function findSum(n, m) {
    let result;
    if (action === true) {
        if (isNaN(n) || n % 2 == 0) {
            n === 0;
            // prompt "введіть ціле число?"
        }
        if (isNaN(m) || m % 2 == 0) {
            m === 0;
        }
        result = n + m;
    } else {
        result = n + m;
    }
    console.log(result);
    return result;
}
console.log(result);
console.log(`The result is ${result}`);
alert(`Your numbers were ${n} and ${m}.\nYou decided to pass even numbers.\nThe sum of two numbers is ${result}`);