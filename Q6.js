

// Q6.You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
// containing the age of persons that are over 1818 (18(18 included)).
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
// function. No need to take any input.


let arr = [12, 13, 1, 45, 5, 34, 23, 16, 19, 20, , 23, 12, 21, 89, 18, 67]

function high_Age(arr) {
    return arr.filter(age => age >= 18);

}

console.log(high_Age(arr))