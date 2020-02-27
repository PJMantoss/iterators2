import { songs } from "./data";
/*
Q1. Write a function called listNames which takes in an array of songs and console.logs the name of each one.
*/
function listNames(arr){
    return arr.forEach(function(v){
         console.log(v.name);
    })
}

//test
listNames(songs);
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

function listSongDetails(arr){
    return arr.forEach(function(val){
        console.log(val.name + ", by " + val.artist + " " + "(" + val.duration + ")" + ".");
    })
}

//test
listSongDetails(songs);
/*
See You Again, by Wiz Khalifa featuring Charlie Puth (3:57).
Bad Blood, by Taylor Swift featuring Kendrick Lamar (3:19).
Cheerleader, by OMI (2:58).
Can't Feel My Face, by The Weeknd (3:35).
What Do You Mean?, by Justin Bieber (3:26).
The Hills, by The Weeknd (4:04).
Hello, by Adele (4:55).
*/

/*
Q3. Write a function called summerJamCount which takes in
an array of songs and returns the number of songs which hit #1 on 
the charts in June, July, or August.
*/

function summerJamCount(arr){
    let newArr = [];
    arr.forEach(function(obj){
        if([6,7,8].includes(obj.month)){
            newArr.push(obj.month);
        }
    })
    return newArr.length;
}
