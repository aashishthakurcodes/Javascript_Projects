function addTask() {
    const titleInput = document.querySelector('#title');
    const descInput = document.querySelector('#desc');
    const dueDateInput = document.querySelector('#duedate');

    const titleValue = titleInput.value.trim();
    const descValue = descInput.value.trim();
    const dueDateValue = dueDateInput.value.trim();

    // Validate input fields
    if (!titleValue || !descValue || !dueDateValue) {
        alert("All fields are required!");
        return; // Stop the function if any input is empty
    }

    const newTask = document.createElement('div');
    const newTaskheading = document.createElement('h1');
    newTaskheading.className = "Heading";
    const newTaskdesc = document.createElement('p');
    newTaskdesc.className = 'Desc';
    const newTaskdate = document.createElement('h3');
    newTaskdate.className = 'date';
    newTask.className = 'taskadded';

    newTask.append(newTaskheading, newTaskdesc, newTaskdate);
    const tasklist = document.getElementById('taskList');
    tasklist.appendChild(newTask);

    // Set the task content from input fields
    newTaskheading.textContent = titleValue;
    newTaskdesc.textContent = descValue;
    newTaskdate.textContent = dueDateValue;

    // Clear input fields after adding the task
    titleInput.value = '';
    descInput.value = '';
    dueDateInput.value = '';

    // Add delete and edit functionality
    deleteTask(newTask);
    editBtn(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delBtn';
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);
    deleteBtn.onclick = function () {
        newTask.remove();
    };
}

function editBtn(newTask) {
    const editbtn = document.createElement('button'); // Fixed: Correctly defined the button
    editbtn.className = 'editbtn'; // Fixed: Correctly assigned the class
    editbtn.textContent = "Edit";
    newTask.appendChild(editbtn);

    const handleEdit = () => {
        const currentHeading = newTask.querySelector('h1');
        const currentDesc = newTask.querySelector('p');
        const currentDate = newTask.querySelector('h3');

        // Create input fields for editing
        const editTitleInput = document.createElement('input');
        editTitleInput.type = 'text';
        editTitleInput.value = currentHeading.textContent;

        const editDescInput = document.createElement('input');
        editDescInput.type = 'text';
        editDescInput.value = currentDesc.textContent;

        const editDateInput = document.createElement('input');
        editDateInput.type = 'date';
        editDateInput.value = currentDate.textContent;

        // Replace the text content with input fields
        newTask.replaceChild(editTitleInput, currentHeading);
        newTask.replaceChild(editDescInput, currentDesc);
        newTask.replaceChild(editDateInput, currentDate);

        // Change the button to "Save"
        editbtn.textContent = "Save";

        // Update the click handler for saving the changes
        editbtn.onclick = () => handleSave(editTitleInput, editDescInput, editDateInput, currentHeading, currentDesc, currentDate);
    };

    const handleSave = (editTitleInput, editDescInput, editDateInput, currentHeading, currentDesc, currentDate) => {
        const updatedTitle = editTitleInput.value.trim();
        const updatedDesc = editDescInput.value.trim();
        const updatedDate = editDateInput.value.trim();

        if (!updatedTitle || !updatedDesc || !updatedDate) {
            alert("All fields must be filled out.");
            return;
        }

        currentHeading.textContent = updatedTitle;
        currentDesc.textContent = updatedDesc;
        currentDate.textContent = updatedDate;

        // Replace the input fields with updated text content
        newTask.replaceChild(currentHeading, editTitleInput);
        newTask.replaceChild(currentDesc, editDescInput);
        newTask.replaceChild(currentDate, editDateInput);

        // Change the button text back to "Edit"
        editbtn.textContent = "Edit";

        // Reset the edit button's functionality
        editbtn.onclick = handleEdit;
    };

    // Attach the initial edit functionality
    editbtn.onclick = handleEdit;
}
