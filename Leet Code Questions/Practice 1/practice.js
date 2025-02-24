// Q) Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.


var container = document.querySelector("#container");
const array = ' [ "IT" , "Mechatronics" , 23 , "Computer" , "Software" , 99 ] '
const arr = JSON.parse(array)

function leetQuestion() {
    if (arr.length > 0) {
        var solution = arr[arr.length -1]
        console.log(solution);
    } else{
        console.log("-1");
    } 
}
leetQuestion()

