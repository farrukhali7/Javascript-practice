let password = document.getElementById("password")
let button = document.getElementById("button")
let submit = document.getElementById("submit")

button.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type = "text";
        button.textContent = "Hide";
    } else{
        password.type = "password";
        button.textContent = "Show";
    }
})

submit.addEventListener("click" , ()=>{
    if (password.value.length >= 8) {
        console.log("password approved");
        
    } else {
        alert("password must match all the requirements!")
    }

})

