
// const getData=document.getElementById("taskform");
// const testList=document.getElementById("taskList");
// const tasks=[]
// getData.addEventListener('submit',(e)=>{
//     e.preventDefault()//

//     const title=document.getElementById('title').value;
//     const desc=document.getElementById('desc').value;
//     const dueDate=document.getElementById('duedate').value;


//     const newItem={
//         title,desc,dueDate
//     }
//     const alData=tasks.push(newItem)
//     localStorage.setItem("users",JSON.stringify(alData));

//     console.log(alData)
// })

// function displayData(){

// }



function addTask() {
    //creating structure
    const newTask = document.createElement('div')
    const newTaskheading = document.createElement('h1')
    const newTaskdesc = document.createElement('p')
    newTask.className = 'taskadded';
    // Ading into structure
    newTask.append(newTaskheading, newTaskdesc)
    const tasklist = document.getElementById('taskList');
    tasklist.appendChild(newTask);
    //Getting Value
    newTaskheading.textContent = document.querySelector('#title').value.trim();
    newTaskdesc.textContent = document.querySelector('#desc').value.trim();
    //Empty input fields
    document.querySelector("#title").value = '';
    document.querySelector("#desc").value = '';


    deleteTask(newTask)
    editBtn(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function () {
        newTask.remove()
    }
}

function editBtn(newTask) {
    //creating btn elemnet
    const editbtn = document.createElement('button');
    editbtn.textContent = "Edit";
    newTask.appendChild(editbtn);

    // Define the edit behavior
    const handleEdit = () => {
        // Select the current title and description elements
        const currentHeading = newTask.querySelector('h1');
        const currentDesc = newTask.querySelector('p');

        // Create input fields for editing
        const editTitleInput = document.createElement('input');
        editTitleInput.type = 'text';
        editTitleInput.value = currentHeading.textContent;

        const editDescInput = document.createElement('input');
        editDescInput.type = 'text';
        editDescInput.value = currentDesc.textContent;

        // Replace the current title and description with input fields
        newTask.replaceChild(editTitleInput, currentHeading);
        newTask.replaceChild(editDescInput, currentDesc);

        // Change "Edit" button to "Save"
        editbtn.textContent = "Save";

        // Redefine the onclick behavior for saving
        editbtn.onclick = () => handleSave(editTitleInput, editDescInput, currentHeading, currentDesc);
    };

    // Define the save behavior
    const handleSave = (editTitleInput, editDescInput, currentHeading, currentDesc) => {
        const updatedTitle = editTitleInput.value.trim();
        const updatedDesc = editDescInput.value.trim();

        // Validate input
        if (!updatedTitle || !updatedDesc) {
            alert("Both fields must be filled out.");
            return;
        }

        // Update the text content of the title and description
        currentHeading.textContent = updatedTitle;
        currentDesc.textContent = updatedDesc;

        // Replace input fields with updated elements
        newTask.replaceChild(currentHeading, editTitleInput);
        newTask.replaceChild(currentDesc, editDescInput);

        // Change "Save" button back to "Edit"
        editbtn.textContent = "Edit";

        // Revert back to edit functionality
        editbtn.onclick = handleEdit;
    };

    // Attach the initial edit functionality
    editbtn.onclick = handleEdit;
}


