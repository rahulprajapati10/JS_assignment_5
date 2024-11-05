

//  Q2. Write a program which takes an array as input from the user and find out the sum of the array elements.
// Note: You have to complete Find_Sum. No need to take any input.



let  arr = [2, 12, 13, 123, 23]

function find_Sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(find_Sum(arr));
