// Iteration 1: All directors? - Get the array of all directors.
/* _Bonus_: It seems some of the directors had directed multiple movies so they will 
    pop up multiple times in the array of directors. How could you "clean" a bit this 
    array and make it unified (without duplicates)? */

const getAllDirectors = (movies) => {
    return movies.map(movie => movie.director);
} 

/* 

> Bonus interaction 1.1
const getAllDirectors = (movies) => {
    return [... new Set (movies.map(movie => movie.director))];
} 

*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    amount = movies.filter((movie) => {
      let spielbergMovie = movie.director === 'Steven Spielberg';
      let dramaMovie = movie.genre.includes('Drama');

      return spielbergMovie && dramaMovie; }).length;

    return amount
  };

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function roundNumbers(number, decimals) {
    Math.round(number * 10 ** decimals) / 10 ** decimals;
}

const ratesAverage = (movies) => {
  if (movies.length === 0) {
    return 0;
  }

  const rates = movies.map((movie) => movie.rate)
    .map((rate) => {
      if (typeof rate === 'number') {
        return rate;
      } else {
        return 0;
      }
    });
  let sumRates = rates.reduce((accumulator, rate) => accumulator + rate, 0);
  let averageRate = sumRates / rates.length;

  return roundNumbers(averageRate);
};

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {
    const dramaMovies = array.filter((movie) => movie.genre.includes('Drama'));
    const averageDramaMovieRate = ratesAverage(dramaMovies);
    return averageDramaMovieRate;
  };



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    const sortedMovies = [... movies];
    sortedMovies.sort((firstMovie, secondMovie) => {
        const firstMovieYear = firstMovie.year;
        const secondMovieYear = secondMovie.year;
        
        switch(sortedMovies) {
            case (firstMovieYear > secondMovieYear):
                return 1;
                break;
            case (firstMovieYear < secondMovieYear):
                return -1;
                break;
            case (firstMovie.title.toLowerCase() > secondMovie.title.toLowerCase()):
                return 1;
                break;
            default:
                return -1
        };
    });
    
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAphabetically = (movies) => {
    const sortedMovies = [... movies];
    sortedMovies.sort((firstMovie, secondMovie) => {
        return firstMovie.title.localeCompare(secondMovie.title);
    });

    const movieTitles = sortedMovies.map((movie => movie.title);
    return movieTitles.slice[0, 20];
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
