    "use strict";

    let number0fFilms;

    function start() {
        const number0fFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');

        while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
            number0fFilms: +prompt('сколько фильмов вы уже посмотрели?', '');
        }
    }

    start();

    const personalMovieDB = {
        count: number0fFilms,
        movies: {}, // пустой обьект 
        actors: {},
        genres: [], // Свойства
        privat: false
    };

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько очените его?', '');

        if ( a != null && b != null && a !='' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b; 
            console.log('done!'); 
        } else {
            console.log('Wrong!');
            i--;
        }
    }
    console.log(personalMovieDB);

}

// rememberMyFilms();

function  detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }    
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

    
function writeYourGeneres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1]  = prompt(`Ваш любимый жанр по номером ${i}`); //Вопрос 
    }
}

writeYourGeneres();








     const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько очените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько очените его?', '');

        personalMovieDB.movies[a] = b; 
        personalMovieDB.movies[c] = d; 

        console.log(personalMovieDB);





       Условия 13 урок 
    
    if (4 == 3) {
        console.log("OK!"); // если 4=4 то будет ок 
    } else {   // в случае не верного условия
        console.log ("Error");
    }

    const num = 50;

    if (num < 49) {
        console.log("Error");
    } else if ( num > 100) {
        console.log("Много");
    } else {
        console.log("OK!");
    }

        //  ? -  тернантный оператор: если действие верно : если действие не верно;
    (num === 50) ?  console.log("OK!") : console.log("Error");

    // бинарные аргументы 
    4 + 4 // + - бинарный аргумент 
    +'4'; //  унарный + который работает только с 1й строкой 

    кострукция свич - модификация ли которая поодежривает сразу несколько проверок и условий 
        const num = 51;

    switch (num) {     // свич свегда идет на строгое  сравнение!
        case 49:  
            console.log('Неверно');
            break;  // брейк - для того чтобы проверки шли дальше, если не прописать брейк - на этом все закончится 
        case 100: 
            console.log('Неверно');
            break;
        case 50:
            console.log('В точку!');
            break;
        default:  // если ничего не подошло из вариков 
            console.log('не в этот раз ');
            break;
    }
    "" - это строка




    Урок 14. Цикл - однотипные действия и мы их автоматизируем, чтобы программа сделала все за нас

    let num = 50; 

    1 - cпособ 

    while (num <= 55) {         // покачто это условие выполняется, но мы будем делать какие-то действия
        console.log(num);
        num++;
    }             

    2й цикл  - сначала заставляем цикл что-то сделать, а потом уже проверить условия, если необходимо выйти из цикла

    do {
        console.log(num);
        num++;
    }
    while (num < 55);

    //3й цикл самый популярный - мы можем подробно его настроить

    for (let i = 1; i < 10; i++) {
        if (i == 6) {
            // break;
            continue; // пропускает шаг который нам не нужен, но при этом не прирывает цикл
        }
        console.log(i);
    }

 самостоятельная практика 
    if (choice === 'sunny') {
        if (temperature < 86) {
            para.textContent = 'Now' + temperature + 'graduse po farengeity - well/ Go for a walk';
        } else if (temperature >= 86) {
            para.textContent = 'Now' + temperature + 'graduse po farengeity - hot, Go for a walk';
        }
    }



  Урок 15. Применяем условия и циклы.
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько очените его?', ''),
        // c = prompt('Один из последних просмотренных фильмов?', ''),
        // d = prompt('На сколько очените его?', '');

        personalMovieDB.movies[a] = b; 
        personalMovieDB.movies[c] = d; 

        console.log(personalMovieDB);



    for(let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько очените его?', '');

            // if ( a != null && b != null && a !='' && b != '' && a.length < 50 ) {
            //     personalMovieDB.movies[a] = b; 
            //     console.log('done!'); 
            // } else {
            //     console.log('Wrong!');
            //     i--;
            // }
    }
    console.log(personalMovieDB);




if (personalMovieDB.count < 10 ) {
    console.log('Просмотрено мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30 ) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}







Урок 16. Фунции , стрелочные ф-ции - этонаши действия в джс, использ типы данных и изменяют инфу так как мы ей укажем. Сокрощает код.

let num = 20;

function showFirstMessage(text) {  // имя функции должно быть глаголом с припиской того, над чем выполняется действиее(показать какое-то первое сщщбщения)
    console.log(text);
    let num = 10;
}

showFirstMessage('hello world');       // чтобы выше функция заработала, ее нужно вызвать. Делаем это
console.log(num);

// замыкание - это сама функция вместе со всеми внешними переменными которые ей доступны

function calc(a, b) { 
    return (a + b);   //return - считается каак окончание фун-ции
    console.log('dvd'); // Unreachable -  этот код небудет работать, потому что уже есть сверху функция
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;

    // тут может быть длинный код 

    return num;
}

const anotherNum = ret(); //  вывели наружу
console.log(anotherNum);

// класификации функций 

function name(params) {      //1 - function declaration  - оссобенность функции этой - она работает ещё до того как была вызвана, потому что изначально после хтмл запуска кода, запускается джс файл и перавым делом считается функции, потом остальной код. Тут не ставится точка с запятой
}

// 2 - function exprestion - функционально выражение. Ставим ; в конце. Суть что в переменной функция, потому что функция это внутр состояние переменной.!!! Она создаетмя только тогда, когда до нее доходит поток кода, можно вызвать только после объявления. Работает как переменная.

const logger = function name(params) {
    console.log('hello');
};

logger(); // запускаем функцию 

// 3- современный стандарт. Стрелочная функция. !!!Она не имеет своего контекста, везде ее использ нельзя. Если фнк-я в одну строчку - можно упускать фигурные скобки, [  => return a + b ;] ;  а если функция имеет 1 аргумент, то можно писать так [calc = a => a.....;]
const calc = (a, b) => {return a + b};
// если функция разростается, то выглядит она примерно так:
const calc =  (a + b) => {
    console.log('1');
    return a + b;
}

практика с ютуба на циклы 




Урок 17.  Методы и свойства строк и чисел 

const str = 'test'; 
console.log( str[2]); // число букв в переменной 


1 метод изменений регистра . Меняет значение и отображает в другой строке,  а сторое значение так и остается. 

const str = 'test';
// console.log(str.toUpperCase());     // вверхний регистр 
console.log(str.toLowerCase());       // нижний регистр 
console.log(str);


2 метод позволяет найти кусочек моей строки и сказать с какой строки она начинается - поиск от строки 

const fruit = 'Some fruit'; 
console.log(fruit.indexOf('fruit')); // поиск под строки - должен применять к себе аргумент, с какого индекса начинается код. тоесть слово фрукт начинается с 5 буквы в константе



// методы с взаимодействиями со троками 

// 1 
const logg = 'Hello, world'; 
console.log(logg.slice(6,  12)); // вырезает кусочки текста из строки (первая буква, последняя но он а не включ)

const logg = 'я маленькая лошадка '; 
console.log(logg.slice(11));  // можно задать только начало. Можно прописать еще так (-7, -1) - и будет читать с права на лево

2 метод  
console.log(logg.substring(11));  //  можно задавать первый аргумент больше чем второй, но не стоит так делать и не поддерживает отрицательные значения. Комманда аналогична slice. 

3 метод 
console.log(logg.substr( 10, 5));  //   говорит сколько симфолов нам нужно вырезать (начинаем с такай то буквы, вырезаем нн символов)



работа с числами 
Math - математические комманды, они есть в браузерном консоле.

const num = 12.2; 
console.log(Math.round(num)); // округление числа 


const test = " 12.2px";
console.log(parseInt(test)); // метод который вызывается на числах. Переводит числовую ситстему исчисления:  10ная, 2чкая система. Помучаем числовой тип данных, если мы применяем это на строке, то наша строка обрезается на 0.2рх и превращается в числовой тип данных

console.log(parseFloat(test)); // метод служит чтобы взять число или строку и вернуть в 10ный вариант значения, но возращает не обрезаное( цельное число), а 12,2




 Урок 18. CcallBack  - не все функции идут работая по порядку, не смотря на то, что мы это все прописали.  

    function first () {
        // что-то выполняется, но в этой функции есть ещё одно действие, которое замедляет пдгружая процесс
        setTimeout(function() {
            console.log(1); 
        }, 500);
    }

function second() {
    console.log(2);
}

first(); 
second();

function learnJS(lang, callBack) {  // колбэк означает, что петерь эта функция точно прогрузится первой
    console.log(`i learn: ${lang}`); 
    callBack();
}

function done() {
    console.log('Я прошел этот урок!');

}

learnJS('JavaScript', done);






 Урок 20.Объекты, деструктуризация объектов. 

const obj = new Object();   // структура обьекта, но она уже редко использ. поскольку длиннй текст

const options = {
    name: 'test', 
    with: 1024,
    height: 1012,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {  // метод  объектов
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // Деструктуризация - это вытягивания элеммента из обьекта
console.log(border);  // Деструктуризация - это вытягивания элеммента из обьекта
console.log(options ["colors"]["border"]);


delete options.name;  // что-то удалить 
console.log(options);

let counter = 0;  // счетчик символов
for (let key in options) { //Перебор -  показывает все элементы котовые находятся в обьекте. Если вместо in => of -мы не можем вспомошью этого метода передбать обьекты
    if (typeof(options[key]) === 'object') { 
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i ]}`); 
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`); 
    }
}

console.log(counter);

Функции и методы обьектов

console.log(Object.keys(options).length); // 





Урок 21. Масивы и псевдомасивы

Масив - это структура, которая содержит элементы по порядку. Набор каких функций


методы в массиве
const arr = [1, 2, 3, 6, 8];

arr.pop();    // удаляет последние элементы из нашего массива 
arr.push(10);  // добавляет элемент в конец массива 
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);             // перебтрает все элементы и выводит в консоль
}

for (let value of arr) {
    console.log(value);   // каждый единый элемент, это как цикл . Эта функция подходит для брейк и континио
}

arr[99] = 0;
console.log(arr.length);
console.log(arr);              // так делать нельзя. В консоле выбивает не правильное числовое значение  

const str = prompt("", "");
const products = str.split(", "); // разделили строчку и получили из нее массив элементов
products.sort();                  // метод сортировки, сортирует элемменты как строки, по алфавиту.
console.log(products.join('; '));  // джоин - обьединение обьектов в массиве. Тут этот массив слепил обьекты разделив ; знаком

еще один пример на цифрах 
const arr = [1, 92, 33, 46, 8]; 
arr.sort(compareNum);  // тут алгоритм быстрой сортировки, цифры сортируются вот так [1, 33, 46, 8, 92]
console.log(arr);

function compareNum(a, b) {
    return a - b;  // спомощью этой формулы, это все сортируется четко [1, 8, 33, 46, 92]
}


псевдомасивы - это обьект структура которого совпадает со структурой массива. Тоесть все тоже самое что и метод, но в нем не будет совсем никаких методов; forEach, filtr, pop, push, join. Это просто структура которая хранит данные по порядку


Методы перебора в массиве - for each

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива  ${arr}`);
});  // метод это функция он принимает ещё в себе коллбег функцию, это перебирает свойства в массиве или обьекте, позволяет удобно манипулировать данными. тут брейк и континио не сработает

arr.map - перебирает каждый элемент но при этом его модифицирует, и вернет новый масив. 
arr.filter - отвильтровует новый массив.( оставляет только четные числа или только элеммент строка и тд)