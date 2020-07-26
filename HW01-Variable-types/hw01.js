const item1 = 15.678;
const item2 = 123.965;
const item3 = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(Math.max(item1, item2, item3));

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(Math.min(item1, item2, item3));

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let total = item1 + item2 + item3;
console.log(total);

/* Відкиньте копійки у всіх товарів, 
потім – складіть цілу частину вартості кожного товару між собою. 
Округлення використовувати в меншу сторону. */
let totalRounded = Math.floor(item1) + Math.floor(item2) + Math.floor(item3);
console.log(totalRounded);


/* Виведіть суму товарів округлену до сотень.
(Наприклад якщо вийшло 260, то виведіть 300) */
console.log(Math.ceil(totalRounded / 100) * 100);

/* Виведіть булеве значення: чи є сума всіх товарів
(округлена в меншу сторону) парним чи непарним числом */
((totalRounded % 2) === 0) ? console.log('even'): console.log('odd');


/* Виведіть суму решти, при оплаті всіх товарів(без округлення), 
якщо клієнт платить 500 грн. */
let money = 500;
let rest = money - total;
console.log(rest);

/* Виведіть середнє значення цін, округлене до другого знаку після коми */
// сума чисел масива
let sum = [item1, item2, item3].reduce((a, b) => a + b, 0);
// щоб отримати середнє, ділимо на довжину масива
let middleNumber = sum / [item1, item2, item3].length;
console.log(middleNumber.toFixed(2));

/* (Більш складне) Створіть змінну, в якої збережіть випадкову знижку
(використовуйте функцію Math.random).*/