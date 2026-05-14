let balance = 210000, amount_1 = 60000, amount_2 = 2600, amount_3 = 1700, course = 43.7,total2, a, income2, income3, total, total3, month1, month2, month3;

month1 = 3500 + 400 + (9.99*course)

course +=1;
month2 = 3500 + 400 + (9.99*course)
income2 = amount_2 * course;

course +=1;
month3 = 3500 + 400 + (9.99*course)
income3 = amount_3 * course;



total = month1 + month2 + month3;
total2 = amount_1 + income2 + income3;
a = 4500 + (0.05*total2)

total3 = balance + total2 - total - a;
console.log(`В цьому кварталі Максим витратив ${total} грн `)
console.log(`Загальний дохід Максима за квартал становить ${total2} грн` )
console.log(`Загальна сума податків становить ${a} грн`)
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${total3} грн`)