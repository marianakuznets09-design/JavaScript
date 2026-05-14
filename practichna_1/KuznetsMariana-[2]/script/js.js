let amount_1 = 68000, amount_2 = 2600, amount_3 = 1900, course = 43.7, a, b, c, d, total;
a = amount_2 * course;
b = amount_3 * course;
c = amount_1 + a + b;
d = c * 0.05;
total = d + 4500;
console.log(`Загальна сума доходу Максима складає ${c} грн. `);
console.log(`В кінці кварталу Максиму необхідно сплатити ${total} грн.`);