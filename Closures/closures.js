// practice 1:
function closures() {
    let a = "first value";
    return function inner(){
        let b = "second value";
        console.log(a);
        console.log(b);
    }    
}
closures()()// it will run the inner function without ()() there will be no output.

//practice 2:
function closures1(){
    let a1 = "harry"
    return function inner1(){
        let b1 = "koko"
        console.log(a1);
        return function innerfn(){
            let c1 = "maya"
            console.log(b1); //koko
            
        }
    }
     
}
closures1()()() //jitne inner functions utne no of brackets.



//practice 3: Private counter using Closures;
// In this example encapsulation is used.

function counter(){
    let count = 0;

     return {
         increment(){
            count++;
            console.log(count);
            return count
         },
         decrement(){
            count--;
            console.log(count);
            return count;
         }
         
        }
    //  return function decrement(){   // In js only one return function will be executed and then it will exit the function so this decrement wont be processed
    //     count--;
    //     return count
    //  }
}

counter().decrement()   // this is how we can access inner functions
counter().increment()
counter().decrement()

// const counterans = counter();   //here counter() is function and counterans is a object. that why we have put object.itschilds
// counterans.decrement(); 
// counterans.increment();
// counterans.increment();
// counterans.increment();
// counterans.decrement();

