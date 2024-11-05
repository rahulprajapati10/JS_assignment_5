

// Q10. Min and Max

// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements.


let arr = [12, 11, 121, 12, 120, 132]

let max_Number = arr[0];

let min_Number = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > max_Number) {
        max_Number = arr[i];
    }
}

console.log(max_Number);

for (i = 0; i < arr.length; i++) {
    if (arr[i] < min_Number) {
        min_Number = arr[i];
    }
}

console.log(min_Number);