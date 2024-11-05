

// Array assignment

// Q1. Find the Product.

// Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod. No need to take any input.



let arr = [2, 4, 9, 10]

function find_Product(arr) {
    let product = 1;
    for (let num of arr) {
        product *= num;
    }
    return product;
}
console.log(find_Product(arr));