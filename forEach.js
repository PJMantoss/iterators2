import { songs } from "./data";
/*
Q1. Write a function called listNames which takes in an array of songs and console.logs the name of each one.
*/
function listNames(arr){
    return arr.forEach(function(v){
         console.log(v);
    })
}
