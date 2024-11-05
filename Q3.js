

// Q3. You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A.



let arr = [12, 1, 5, 23, 1, 1, 1, 23, 12, 14, 15, 18, 1, 23, 11, 1, 3, 4, 5, 1, 5,]

function count_Occurence(arr) {
    let count_K = 0;
    for (let num of arr) {
        if (num == 1) {
            count_K++
        }
    }
    return count_K;
}

console.log(count_Occurence(arr));