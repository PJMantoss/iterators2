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
