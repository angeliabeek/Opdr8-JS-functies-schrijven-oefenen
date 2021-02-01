// object
const favoriteMovie = {
    title: "Sleepy Hollow",
    duration: 105,
    stars: ["Johnny Depp", " Christina Ricci", " Miranda Richardson"]
};

// function
const movieDatabase = function () {
    console.log(favoriteMovie.title + " lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars + ".");
};

// invocation
movieDatabase();

// of met return statement
const movieDatabase = function () {
    return favoriteMovie.title + " lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars + ".";
};

// invocation
console.log(movieDatabase());
