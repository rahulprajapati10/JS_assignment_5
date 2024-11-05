

// Q4.  You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// // Note: You have to complete findEvenOdd function. No need to take any input


let arr = [2, 1, 3, 4, 5, 6]
function sum_Elements(arr) {
    let even_Sum = 0;
    var odd_Sum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            even_Sum += num;
        }
        else {
            odd_Sum += num;
        }

    }
    return [even_Sum, odd_Sum];
}
console.log(sum_Elements(arr));