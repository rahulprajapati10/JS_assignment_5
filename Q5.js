

//  Q5.  Find whether the number is present or not
//  Write a program which takes an array as input from the user and a number. Check whether the number is present or not.
//  Note: You have to complete Find_Num. No need to take any input.


let arr = [12, 12, 3, 4, 5, 6, 7, 7, 8, 9, 0, 1, 2, 23, 12, 13, 14, 16, 0, 19, 2]

function find_num(arr, num) {

    if (arr.includes(num))
        return "Number is present in an array";
    else
        return 'Number is not present in an array'

}

console.log(find_num(arr, 7));