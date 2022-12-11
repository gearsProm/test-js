'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				  b = prompt('На сколько оцените его?', '');
				  
				  if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
					  personalMovieDB.movies[a] = b;
					  console.log('ok');
				  } else {
					  i--;
					  console.log('erorr!');
				  }
		}	
}

rememberMyFilms()
function detectPesonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('prosmotreno  malo');
	} else if ( 10 < personalMovieDB.count < 30) {
		console.log('prosmotreno  class');
	} else if ( 30 < personalMovieDB.count ) {
		console.log('prosmotreno  kinoman');
	} else {
		console.log('error!');
	}
}

detectPesonalLevel();		

console.log(personalMovieDB)
function snowMyBd (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
snowMyBd(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		//const c = prompt(`Ваш любимий жанр под номером по порядку ${i}`);
		//personalMovieDB.genres[i-1] = c;
		personalMovieDB.genres[i-1] = prompt(`Ваш любимий жанр под номером по порядку ${i}`);
	}	
}
writeYourGenres();