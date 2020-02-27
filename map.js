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
