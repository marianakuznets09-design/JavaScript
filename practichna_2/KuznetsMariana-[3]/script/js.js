let score, homeworkDone,finalTestPassed, text, certificate;
score = prompt("яка кількість балів?");
homeworkDone = prompt("Чи виконане домашнє завдання? (true or false");
finalTestPassed = prompt("Пройдено фінальний тест(true or false)");

if (score >= 70 && homeworkDone == true && finalTestPassed == true) {
    certificate = "сертифікат надано"
}else{
    certificate = "сертифікат не можна отримати, не виконані умови"
}

console.log(certificate);
alert(certificate)


