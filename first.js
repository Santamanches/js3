// Циклы - исползуются для многократных действий для одного участка кода

// ++  прибавлает 1 к нашему элементу ( инкримент )
// --  отнимает 1 у нашего элемента ( дикремент )


// var i = 0;

// console.log(i);
// console.log(++i); // Префикс - сначала прибавляет а потом выводит значение
// console.log(i++); // Постфикс - сначала выводит значение а потом прибавляет
// console.log(i++);
// console.log(i++);


// while 

// var i = 0;

// while(i < 20) {
//     console.log(i);
//     i++;
// }

// цикл будет выполнятся до тех пор пока итератор ( i ) не достигнет 20


// do while


// var i = 0;

// do{
//     console.log(i);
//     i++
// }while(i < 10) 


// do {
//     var num = +prompt('Введите число');
// }while( isNaN(num) ||  num < 10) {
//     console.log('Вы ввели число ' + num);
// }


// let - способ объявления локальной переменной и она не выходит за пределы видимости фигурных скобок

// for(let i = 0;i < 10;i++) {
//     if(i %2 == 1) {
//         console.log('Число нечетное ' + i);
//     }
// }



// let even = 0;

// for(let i = 0; i <= 20;i++) {
//     even += (i %2 == 0) ? 1 : 0;
// }

// console.log('Количество четных чисел ' + even);



// let sum = 1;

// for(let i = 1; i <= 10;i++) {
//     sum = sum * i
// }

// console.log(sum);


var a = +prompt('Введите своё число:')
var b = +prompt('Введите степень вашего числа:')
let result = a;

for (let i = 1; i<b; i++) {
    result  *= a;
} 
alert('Ответ :' + result)


