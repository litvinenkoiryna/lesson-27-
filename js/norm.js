//1
// var n = window.prompt("enter a five-digit number ");
// if(n===n.split("").reverse().join(""))
//     alert("Number is a palindrome");
// else
//     alert("Number isn't a palindrome");


//2
// сумма оплаты
// let a = prompt('Сумма покупки');
// // скидка
// let result = 0;
// if (a <200) {
//     result=a;
// } else if (a >=200 && a<300) {
//     result = a-(a * 0.02);
// } else if (a >=300 && a < 500) {
//     result = a-(a * 0.05);
// } else if (a >= 500) {
//     result = a-(a * 0.07);
// }
// console.log( result );
// alert('сумма к оплате ' + result + ' грн')


//№4
// зациклилось, но все равно работает не по условию. как я не выдумывала, не придумала как присвоить переменную(название дня)
// и сделать так,чтоб не писать все эти строки, а именно при ответе true будет подставляться переменная в сообщение. а при false цикл останавливался.
//в этом примере не получается остановить(.

/*let question = confirm("Понедельник. Хочешь увидеть следующий день? ");
 while (true) {
     if (question === true) {
         let answer = confirm("Вторник.Хочешь увидеть следующий день?  ");
           }
     if (question === true) {
         let message = confirm("Среда.Хочешь увидеть следующий день?  ");
              }

     if (question === true) {
         let message = confirm("Четверг.Хочешь увидеть следующий день? ");
     }
     if (question === true) {
         let message = confirm("Пятница.Хочешь увидеть следующий день? ");
            }
     if (question === true) {
         let message = confirm("Суббота.Хочешь увидеть следующий день?  ");
              }
     if (question === true) {
         let message = confirm("Воскресенье.Хочешь увидеть следующий день?");
             }
 }*/

 // по этому пришлось опять гуглить:
// const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let currDay = 0;
//
// while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
//     currDay = (currDay + 1) % days.length;
// }


