    "use strict";

    const number0fFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: number0fFilms,
        movies: {}, // пустой обьект 
        actors: {},
        genres: [], // Свойства
        privat: false
    };

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



  //Урок 15. Применяем условия и циклы.

 


    // мои попытки 
    // do {
    //     console.log(anu);
    //     ++anu; 
    // }
    // while (anu < 4);

    // for ( anu = 4; anu < 5; anu++) {
    //     if (anu === 5 );
    //     console.log(anu);
    // }

    // while (anu <= 4 ) {
    //     console.log(anu); 
    //     anu++;
    // }
        // while (c = d) {
        //     console.log(c, d);  
        // }


        // if (a > 50 str.length) {
            
        // }

        //     // if (num < 49) {
    //     console.log("Error");
    // } else if ( num > 100) {
    //     console.log("Много");
    // } else {
    //     console.log("OK!");
    // }





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
