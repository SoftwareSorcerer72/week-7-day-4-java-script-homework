// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().




function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}


// Create an async function that takes in a movie name and prints the movie info
async function printMovieInfo(movieName){
    try {
        const movie = await getMovieInfo(movieName);
            console.log(`ID: ${movie.id}`);
            console.log(`Title: ${movie.title}`);
            console.log(`Director: ${movie.director}`);
            console.log(`Runtime: ${movie.runtime} minutes`);
            console.log(`Description: ${movie.description}`);
// If the movie name is too short, catch the error and log it to the console
} catch (error) {   
    console.warn(error);
  }
}

printMovieInfo('Good vs Evil');
printMovieInfo('Short'); 