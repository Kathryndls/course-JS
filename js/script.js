'use strict' 

    const number0fFilms = +prompt ('сколько фильмов вы уже посмотрели?', '');

    const personalMovieDB = {
        count: number0fFilms,
        movies: {}, // пустой обьект 
        actors: {},
        genres: [], // Свойства
        privat: false
    };

    const a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько очените его?', '');
        c = prompt('Один из последних просмотренных фильмов?', '');
        d = prompt('На сколько очените его?', '');

        personalMovieDB.movies[a] = b; 
        personalMovieDB.movies[c] = d; 

        console.log(personalMovieDB);