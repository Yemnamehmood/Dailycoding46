"use strict";
//DAY 46
//TASK 1 (Use console to debug and track the value of variable inside loop)
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}, i value:, i`); //it logs the current iteration no and the value of i
}
//it simply iterates five times, logging the value of i during each iteration to help with debugging.
//TASK 2 (Implement a try-catch block to handle potential errors in a block of code)
try {
    //intentionally shows an error
    throw new Error("Something Went Wrong");
}
catch (error) {
    console.log(error.message);
}
//it tries to execute a block that throws an error, and the catch block the error gracefully 
//TASK 3 (Describe how to use breakpoints in browser developer tools to debug JS code)
console.log("Before breakpoint");
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After breakpoint");
