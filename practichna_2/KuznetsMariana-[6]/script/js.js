let temperature, sensorError;
temperature = prompt("Яка температура в кімнаті?");
sensorError = prompt("Чи є помилка датчика? (true or false)");

if (temperature === true) {
    text = "помилка датчика температури";
}else if (temperature < 18) {
    text = "Увімкнути обігрів";
}else if (temperature >= 18 && temperature <= 25) {
    text = "Температура комфортна";
}else if (temperature >= 25) {
    text = "Увімкнути кондиціонер";
}
console.log(text);
alert(text);