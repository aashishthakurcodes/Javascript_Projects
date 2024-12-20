
const getData=document.getElementById("taskform");
const testList=document.getElementById("taskList");
const tasks=[]
getData.addEventListener('submit',(e)=>{
    e.preventDefault()//

    const title=document.getElementById('title').value;
    const desc=document.getElementById('desc').value;
    const dueDate=document.getElementById('duedate').value;
    
    
    const newItem={
        title,desc,dueDate
    }
    const alData=tasks.push(newItem)
    localStorage.setItem("users",JSON.stringify(alData));

    console.log(alData)
})

function displayData(){

}