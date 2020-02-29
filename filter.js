
import { songs } from "./data";

/*
Q1. Write a function called getBigHits which takes 
an array of songs and returns an array of song objects 
which were number one for 10 or more weeks.
*/
function getBigHits(arr, key){
    let hits = [];
    return arr.filter(function(val){
        if(val.weeksAtNumberOne >= 10){
            hits.push(val[key]);
            return hits;
        }
    })
}
