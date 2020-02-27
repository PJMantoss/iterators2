import { songs } from "./data";
/*
Q1. Write a function called listNames which takes in an array of songs and console.logs the name of each one.
*/
function listNames(arr){
    return arr.forEach(function(v){
         console.log(v);
    })
}
//test
listNames(["Smooth", "Amazed", "Maria Maria", "Try Again"]);
/*
Smooth
Amazed
Maria Maria
Try Again
*/

/*
Q2. Write a function called listSongDetails which takes in an array of songs and console.logs details about each one.
The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".
*/
