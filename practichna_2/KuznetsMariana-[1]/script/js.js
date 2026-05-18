let isAuthorized, internetSpeed, isBanned, agree, text;
isAuthorized = prompt("Користувач авторизований? (true or false)");
internetSpeed = prompt("Введіть швидкість інтернету");
isBanned = prompt("Акаунт заблокований? (true or false)");
agree = isAuthorized && (internetSpeed >= 20) && !isBanned;
if (agree) {
    text = "ви можете увійти до онлайн-режиму";
}else {
    text = "ви yt можете увійти до онлайн-режиму";
}
console.log(text);
alert(text);