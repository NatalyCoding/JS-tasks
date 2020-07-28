let n = Number(prompt("Enter a Number!"));
let m = Number(prompt("Enter one more number!"));
let action = confirm("Should we pass even numbers?");
console.log(n);
console.log(m);
console.log("Pass even numbers: " + action);

function findSum(n, m, action) {
    let result;

    if (isNaN(n) || n === null) {
        n = 0;
    }
    if (isNaN(m) || m === null) {
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

    } else {
        result = n + m;
    }

    console.log("The sum is: " + result);
    alert(`The sum of two numbers is ${result}.`);
    return result;
}
findSum(n, m, action);