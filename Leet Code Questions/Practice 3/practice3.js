// Q) Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned. If the length of the array is 0, the function should return init. Please solve it without using the built-in Array.reduce method.


// steps;
// need to create a function that contains parameters of an array and initial value  
// argument should be received, giving an array and initial value
// use loop in the function to go through each element/index in that array that should accumulate the all results of all indexes
// use if else in the loop as when the array is empty it should return only the initial value which is 0.


var container = document.querySelector("#container");

function solution(array , initialValue) {    // paramteres given
    let sum = initialValue;
    for (let i = 0; i < array.length; i++) {
        if (array.length === 0) {
           return sum 
        }else{
        sum += array[i];
        }
    }
    return sum;
}
const result = solution([1,2,3,4,5,6,7,8,9,10] , 0)   // arguments received
console.log(result);
container.innerHTML = `The Total is ${result}`
