
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = require("./data")

console.log("hola probando");
// import { movies } from "./data.js"

const getAllDirectors = (moviesArray) => {
    const rawList = moviesArray.map((movies) => movies.director );
    
    const cleanList = rawList.filter((director, numero) => {rawList.indexOf(director) === numero})
    return rawList;
}

console.log("1. Not Clean List:");
console.log(getAllDirectors(movies));

// console.log("2.Clean List");
// console.log(getAllDirectors());
//-------------------------------------------------------------------------------------------------
// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result = 0;
    moviesArray.forEach(movie => {
            if (movie.genre.includes("Drama")) {
            if (movie.director === "Steven Spielberg") result++;
        }
    });
    // if (moviesArray.length === 0) result = 0;
    return result;
}

console.log(howManyMovies(movies));


//---------------------------------------------------------------------------------------------
// // Iteration 3: All scores average - Get the average of all scores with 2 decimals
//VO1----------------------------------------------
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    };
    let result = 0;
    moviesArray.forEach(movie => {
        if (movie.score) result += movie.score;
    });
    return parseFloat((result/moviesArray.length).toFixed(2));
}

console.log(scoresAverage(movies));

//VO2--------------------------------------------
const scoresAverage1 = (moviesArray) =>{
    let totalScores = 0;
    const scores = moviesArray.map((movie) => movie.score);

    for (let i = 0; i <scores.length; i++){
        totalScores = scores[i] + totalScores
    }
    const totalMovieScore = totalScores / moviesArray.length;
    return totalMovieScore.toFixed(2);    
}

console.log(scoresAverage1(movies));

//-------------------------------------------------------------------------------------------------
// // Iteration 4: Drama movies - Get the average of Drama Movies
//VO1-------------------------------
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes ("Drama"));
    return scoresAverage(dramaMovies);   
};

console.log(dramaMoviesScore(movies));

//VO2--------------------------------------------
const dramaMoviesScore1 = (moviesArray) => {
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama");
    });
    const scores = drama.map((movie) => movie.score);

    let total = 0;
    scores.forEach((scores) => total += scores);
    return (total/drama.length).toFixed(2);
}

console.log(dramaMoviesScore1(movies));

//VO3-------------------------------------------------
const dramaMoviesScoreReduce = (moviesArray) => {
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama");
    });
const scores = drama.reduce((total, movie) => {return total += movie.score},0);

const totalDrama = scores / drama.length;
return totalDrama.toFixed(2);
};

console.log(dramaMoviesScoreReduce(movies));

//-------------------------------------------------------------------------------------------------
// // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const year = moviesArray.filter((movie) => movie.year);

    let orderByYear = year.sort((a,b) => (a.year - b.year));

    return year
}
console.table(orderByYear(movies));

//VO2---------------
function orderByYear1(moviesArray) {
    const copyOfMovies = moviesArray.map((movie) => movie);

   copyOfMovies.sort((a,b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
   });

    return copyOfMovies
}

console.table(orderByYear1(movies));



// // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//V01-------------------------------
function orderAlphabetically(moviesArray) {
    const alphabet = moviesArray.map((movie) => movie.title).sort().slice(0,20);
        
    return alphabet
}

console.table(orderAlphabetically(movies));

//VO2--------------------------------------
const orderAlphabetically1 = (moviesArray) => {
    return moviesArray.map((movie) => movie.title).sort().slice(0,20)
};
console.table(orderAlphabetically1(movies));


// // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {}

// // BONUS - Iteration 8: Best yearly score average - Best yearly score average
// function bestYearAvg(moviesArray) {}

// console.log(movies);


