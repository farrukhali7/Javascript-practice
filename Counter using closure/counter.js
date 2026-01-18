let button = document.getElementById("button")
let numbers = document.getElementById("numbers")

let counter = Counter();
button.addEventListener("click", counter)   //this and the above line indicates that "Create a counter then use it when clicked!"

// button.addEventListener("click", Counter())  //this line will also work but it indicates that "Run this function now and you are not telling the browser what to run later(meaning that browser stores only "increment" function and Counter function is gone but we have to Run Counter function that's why we dont write this)" 
// console.log("button is clicked"),

    function Counter() {
        let count = 0
        return function increment(){
            count++;
            console.log(count);
            numbers.innerHTML = count
            return count;
        }
    }