/* 1. I/P arr =[1,2,3,4,5,6,7,8,8] => remove duplicates
O/P = [1,2,3,4,5,6,7,8,] */

/*
 
function removeDuplicates(arr) {
    return [...new arr];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
console.log(removeDuplicates(arr)); // Output: [1,2,3,4,5,6,7,8] 
  */

/* 2. Find whether string is pallindrome or not 
I/P = racecar , o/p = true
I/p = hello , o/p = false
*/

/* 
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
*/

/* 3. reverse a string
i/p = hello , o/p = olleh */

/**/ 


 function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"



