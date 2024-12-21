


function addTask() {
    const newTask = document.createElement('div');
    const newTaskheading = document.createElement('h1');
    newTaskheading.className="Heading"
    const newTaskdesc = document.createElement('p');
    newTaskdesc.className='Desc'
    const newTaskdate = document.createElement('h3');
    newTaskdate.classList='date'
    newTask.className = 'taskadded';

    newTask.append(newTaskheading, newTaskdesc, newTaskdate);
    const tasklist = document.getElementById('taskList');
    tasklist.appendChild(newTask);

    // Set the task content from input fields
    newTaskheading.textContent = document.querySelector('#title').value.trim();
    newTaskdesc.textContent = document.querySelector('#desc').value.trim();
    newTaskdate.textContent = document.querySelector('#duedate').value.trim();

    // Clear input fields after adding the task
    document.querySelector("#title").value = '';
    document.querySelector("#desc").value = '';
    document.querySelector("#duedate").value = '';

    // Add delete and edit functionality
    deleteTask(newTask);
    editBtn(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.className='delBtn'
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function () {
        newTask.remove();
    };
}

function editBtn(newTask) {
    const editbtn = document.createElement('button');
    editBtn.className='editbtn'
    editbtn.textContent = "Edit";
    newTask.appendChild(editbtn);

    // Define the edit functionality
    const handleEdit = () => {
        const currentHeading = newTask.querySelector('h1');
        const currentDesc = newTask.querySelector('p');
        const editDate = newTask.querySelector('h3');

        // Create input fields for editing
        const editTitleInput = document.createElement('input');
        editTitleInput.type = 'text';
        editTitleInput.value = currentHeading.textContent;

        const editDescInput = document.createElement('input');
        editDescInput.type = 'text';
        editDescInput.value = currentDesc.textContent;

        const editDueDate = document.createElement('input');
        editDueDate.type = 'date';
        editDueDate.value = editDate.textContent;

        // Replace the text content with input fields
        newTask.replaceChild(editTitleInput, currentHeading);
        newTask.replaceChild(editDescInput, currentDesc);
        newTask.replaceChild(editDueDate, editDate);

        // Change the button to "Save"
        editbtn.textContent = "Save";

        // Update the click handler for saving the changes
        editbtn.onclick = () => handleSave(editTitleInput, editDescInput, currentHeading, currentDesc, editDueDate, editDate);
    };

    // Handle saving the task edits
    const handleSave = (editTitleInput, editDescInput, currentHeading, currentDesc, editDueDate, editDate) => {
        const updatedTitle = editTitleInput.value.trim();
        const updatedDesc = editDescInput.value.trim();
        const updatedDate = editDueDate.value.trim();

        // Validate if fields are not empty
        if (!updatedTitle || !updatedDesc || !updatedDate) {
            alert("All fields must be filled out.");
            return;
        }

        // Update the text content of the task
        currentHeading.textContent = updatedTitle;
        currentDesc.textContent = updatedDesc;
        editDate.textContent = updatedDate;

        // Replace the input fields with updated text content
        newTask.replaceChild(currentHeading, editTitleInput);
        newTask.replaceChild(currentDesc, editDescInput);
        newTask.replaceChild(editDate, editDueDate);

        // Change the button text back to "Edit"
        editbtn.textContent = "Edit";

        // Reset the edit button's functionality
        editbtn.onclick = handleEdit;
    };

    // Attach the initial edit functionality
    editbtn.onclick = handleEdit;
}


// For local Storage Data

// // Load tasks from localStorage on page load
// document.addEventListener("DOMContentLoaded", () => {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.forEach(task => addTask(task.title, task.desc));
// });

// // Add a new task
// function addTask(title = '', desc = '') {
//     const newTask = document.createElement('div');
//     const newTaskheading = document.createElement('h1');
//     const newTaskdesc = document.createElement('p');
//     const editBtn = document.createElement('button');
//     const deleteBtn = document.createElement('button');
    
//     newTask.classList.add('taskadded');
//     newTaskheading.textContent = title || document.querySelector('#title').value;
//     newTaskdesc.textContent = desc || document.querySelector('#desc').value;
//     editBtn.textContent = 'Edit';
//     deleteBtn.textContent = 'Delete';

//     newTask.append(newTaskheading, newTaskdesc, editBtn, deleteBtn);
//     document.getElementById('taskList').appendChild(newTask);

//     // Add delete functionality
//     deleteBtn.onclick = () => {
//         newTask.remove();
//         removeTaskFromStorage(newTaskheading.textContent);
//     };

//     // Add edit functionality
//     editBtn.onclick = () => {
//         const newTitle = prompt("Edit title", newTaskheading.textContent);
//         const newDesc = prompt("Edit description", newTaskdesc.textContent);
//         if (newTitle && newDesc) {
//             newTaskheading.textContent = newTitle;
//             newTaskdesc.textContent = newDesc;
//             updateTaskInStorage(newTitle, newDesc);
//         }
//     };

//     // Clear input fields after adding task
//     document.querySelector('#title').value = '';
//     document.querySelector('#desc').value = '';

//     // Save task to localStorage
//     saveTaskToStorage(newTaskheading.textContent, newTaskdesc.textContent);
// }

// // Save task to localStorage
// function saveTaskToStorage(title, desc) {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push({ title, desc });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // Remove task from localStorage
// function removeTaskFromStorage(title) {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     const updatedTasks = tasks.filter(task => task.title !== title);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
// }

// // Update task in localStorage
// function updateTaskInStorage(title, desc) {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     const taskIndex = tasks.findIndex(task => task.title === title);
//     if (taskIndex !== -1) {
//         tasks[taskIndex] = { title, desc };
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
// }
