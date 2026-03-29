function addTask(){
    let newTask = document.getElementById("newTask").value;

    if (newTask ===""){
        alert("Ingrese una tarea");
        return;
    }

    let task = document.createElement("li");

    let taskText = document.createElement("span");
    taskText.textContent = newTask;
    
    let checkbox = document.createElement("input");
    checkbox.type="checkbox"
    checkbox.className="taskCheck"
    checkbox.addEventListener ('change', () =>{  
        if(checkbox.checked){
            taskText.style.textDecoration = "line-through";
            document.getElementById("listCompleted").appendChild(task)
        }
        
        else if (document.getElementById("listCompleted").contains(task)){
            document.getElementById("tasks").appendChild(task)
            taskText.style.textDecoration = "none";
        }
        
        else{
            taskText.style.textDecoration = "none";
        }
    })

    task.prepend(checkbox);
    task.appendChild(taskText);     
    


    let deleteButton = document.createElement("button");
    deleteButton.className="deleteBtn";
    deleteButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteButton.onclick = function() {
        task.remove();
    }

    task.appendChild(deleteButton);
    document.getElementById("tasks").appendChild(task);

    document.getElementById("newTask").value = "";
    

}