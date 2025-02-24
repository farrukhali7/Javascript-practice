// Q) Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

var container = document.querySelector("#container")

async function delayFunc() {
    console.log("loading ...");
    container.innerHTML = `<h1>Loading ...</h1>`;
    await new Promise(resolve => setTimeout(resolve,4000)
    )
    console.log("this message is printed after 4 seconds");
    container.innerHTML = "this message is printed after 4 seconds"
}
delayFunc();

async function earlyMssg() {
    await new Promise(resolve => setTimeout(resolve,2000))
    console.log("this message will be printed before the delay message even it is written after that as it has the timer of only 2 seconds");
    container.innerHTML = "this message will be printed before the delay message even it is written after that as it has the timer of only 2 seconds"
}
earlyMssg();
