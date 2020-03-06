/*
Q1. Refactor summerJamCount to use reduce!
*/

function summerJamCount(arr){
    let result = [];
     arr.reduce(function(acc,val){
        if([6,7,8].includes(val.month)){
            result.push(acc + val.month);
        }
    }, " ");
    return result.length;
}

summerJamCount(songs);

/*
Q. Write a function called getTotalDurationInSeconds
which takes in an array of songs and returns the total 
amount of time (in seconds) it would take to listen to all of the songs.
(Hint: can you use anything you've written already to help solve this problem?)
*/

function getTotalDurationInSeconds(arr){
    return arr.reduce(function(acc,val){
        let timeSeconds = parseFloat(val.duration);
        return acc + (timeSeconds * 60);
    }, 0)
}

//test
getTotalDurationInSeconds(songs); //40080