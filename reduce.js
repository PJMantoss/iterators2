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