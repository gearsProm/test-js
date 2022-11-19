'use strict';
//alert('Hello');
//const result = confirm("Are you there");
//console.log(result);
//const answer = prompt("kto ti", "");
//console.log(answer);
//const answers = [];

//answers[0] = prompt('why you?', '');
//answers[1] = prompt('why name?', '');
//answers[2] = prompt('why you old?', '');
//
//document.write(answers);
//console.log(typeof(answers));
//

//


const numberOfFilms = +prompt('skolko filmov pocmotreli', '');
//const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
//console.log(personalMovieBD);
//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};
let a = prompt('last film', ''),
	 b = prompt('ocenka', ''),
	 c = prompt('last film', ''),
	 d = prompt('ocenka', '');

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//      b = prompt('На сколько оцените его?', ''),
//      c = prompt('Один из последних просмотренных фильмов?', ''),
//      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
//console.log(personalMovieDB);