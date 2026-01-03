const saveButton = document.getElementById("save");
const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

function addTask() {
    const taskText = input.value;        
    if (taskText !== "") {
        const taskItem = document.createElement("div");
        taskItem.className = "border border-5 m-4 d-flex justify-content-between"
        
        const taskTextElement = document.createElement("p")
        taskTextElement.className = "d-inline m-2"
        taskTextElement.textContent = taskText;
        console.log(taskTextElement);

        // Edit Button
        // const editButton = document.createElement("button");
        // editButton.textContent = "Edit";
        // editButton.className = "btn btn-success d-flex m-2"
        
        //Delete button
        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger d-flex m-2" 
        deleteButton.addEventListener("click" , ()=>{
            taskItem.remove()
        })
        //includes text and button in each taskItem
        taskItem.appendChild(taskTextElement)  
        taskItem.appendChild(deleteButton) 
        // taskItem.appendChild(editButton) 
        
        //Add taskItem to task list
        tasks.appendChild(taskItem)        
        input.value = ""  ;
    }else{
        alert("Input Fields cannot be left Empty!")
    }
}

saveButton.addEventListener("click",addTask)

// make a todo using enter keyword
input.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
        addTask();
    }
})




