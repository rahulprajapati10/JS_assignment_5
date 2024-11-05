

// Q7. Increment the Array Elements

// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
// You have to complete Inc_Arr. No need to take any input.

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    return arr.map(function (num) {
        return num + 1;
    });
}
console.log(inc_Arr(arr));

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    const arr1 = arr.map(num => num + 1);
    return arr1;
}

console.log(inc_Arr(arr));