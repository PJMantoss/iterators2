/*
Q1. Refactor summerJamCount to use reduce!
*/

function summerJamCount(arr){
     return arr.reduce(function(acc,val){
        let result = val.month;
        if([6,7,8].includes(result)){
            return acc + result.length;
        }
    }, []);
}

summerJamCount(songs);