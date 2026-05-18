// if (вираз) {
//     [інструкції];
//     [інструкції]
// }

// false
// 0
// 0n    //big integer
// ""
// null
// undefined
// NaN

// //оператори порівняння
// let a = 2, b = 3, c = "3";
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); //< >= <=
// console.log(b === c); //!==

// let a = 2., b = 3, c;

// if (a > b){
//     c = 'a > b'
// } else{
//     c = 'a < b'
// }
// console.log(c)

// if (a > b){
//     c = 'a > b'
// } else{
//     if (a < b){
//         c = 'a < b'
//     }
//     else{
//         c = 'a == b'
//     }
// }

// if  (a > b){
//     c = 'a > b'
// } else if ( a < b){
//     c = 'a < b'
// }
// else{
//     c = 'a == b'
// }

// if (a > b)c = 'a > b';
// else if (a < b)c = 'a > c';
// else c = 'a == b';


// // _switch_

// let course , tittle;
// course = prompt('ВВедіть направлення яке ви хочете вивчити')
//
// switch (course) {
//     case "javascript":
//         tittle = "Мова програмування javascript";
//         break;
//     case "figma":
//         tittle = "основи figma";
//         break;
//     case "frontend":
//     case "html":
//     case "css":
//         tittle = "html + css";
//         break;
//     default:       //якщо нічого не підійщло, то це
//         tittle = "я не знаю, що ти хочеш"
//         break;
// }
// alert(tittle);

//логічні оператори
// логічні не
// let a = false;
// console.log(a);
// let b = "text"
// console.log(!!b);  //перевірка на наявність значення

//логічне I

// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
// console.log(b || c);   // або ||


// let age = prompt("Скільки тобі років?"), info;
// if (age >= 18 && age <= 35){
//     info = "Користувачу від 18 до 35 років"
// }
// else if(age > 30){
//     info = "Користувачу більше 30 років"
// }else{
//     info = "менше 18"
// }
// alert(info);
