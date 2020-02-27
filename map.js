import { songs } from "./data";

/*
Q1. Write a function called getDurations
 which takes in an array of songs and 
 returns an array of each song's duration.
*/
function getDurations(arr){
    return arr.map(function(val){
        return val.duration;
    })
}

//test
getDurations(songs);

/*
Q2. Write a function called getDurationInSeconds
which takes in an array of songs and returns an array
of each song's duration in seconds.
*/
function getDurations(arr){
    return arr.map(function(val){
        let timeSeconds = parseFloat(val.duration);
        return timeSeconds * 60;
    })
}
//test
getDurations(songs);

/*
Q3. Write a function called getMainArtists which takes in an array of songs
 and returns an array of the primary artists on the recordings. 
 If there's only one artist, that artist should be returned; 
 if there are featured artists, they should be ignored 
 (so only the artist to the left of "featuring" is kept.)
*/
