// JS is single threaded(runs one line at a time) which means if something takes time like API calling or other that will freeze the app so that's why Async is used

console.log("Start");

setTimeout(()=>{
console.log("this is async");
},2000)     // here 2000 means 2 seconds

console.log("End");

//Using Promises:
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success")  //success appears in the console section 
        console.log("promise has run");
        reject("Failed")
    },2000)
})
promise.then(result=>console.log(result))
promise.catch(error=>console.log(error))    //this and above lines are used for error handling

//Async function:
async function asyncfn() {      //Every async function always returns a promise
    console.log("this is a Async function");
}
asyncfn()
.then(res => console.log(res)) 
.catch(err => console.log(err))

//Async await
const APIData = async()=>{      //Used for API calling
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:" + error);
        
    }
}
APIData()