let day, price, finalday;
day = prompt("Який день тижня?");

finalday = true;
switch(day){
    case "понеділок":
    case "вівторок":
    case "середа":
        price = 150;
        break;

    case "четвер":
    case "п'ятниця":
        price = 200;
    break

    case "субота":
    case "неділя":
        price = 250;
        break;

    default:
        finalday = false;


}

let text;
if (finalday) {
    text = `Вартість квитка ${price} грн`;
}else{
    text = "помилка введеня"
}

console.log(text);
alert(text)