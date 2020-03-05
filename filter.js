
import { songs } from "./data";

/*
Q1. Write a function called getBigHits which takes 
an array of songs and returns an array of song objects 
which were number one for 10 or more weeks.
*/
function getBigHits(arr){
    let hits = [];
    return arr.filter(function(val){
        if(val.weeksAtNumberOne >= 10){
            hits.push(val.name);
            return hits;
        }
    })
}

//test
getBigHits(songs);

/*
Write a function called getShortSongs which takes an array
of songs and returns an array of songs which are shorter than 3 minutes.
*/

function getShortSongs(arr){
    return arr.filter(function(val){
        let shortSong = val.duration;
        if(parseFloat(shortSong) < 3.0){
            return val.name;
        }
    })
}

//test
getShortSongs(songs);