
// Q8. Pass or Fail

// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232.
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
// Note: You have to complete isAllPass function. No need to take any input.



let arr = [33, 32, 45, 16, 65, 78, 45, 54]

function is_all_Pass(arr) {
    for (const num of arr) {
        if (num < 32) {
            return "NO";
        }

    }
    return "YES"


}
console.log(is_all_Pass(arr));
