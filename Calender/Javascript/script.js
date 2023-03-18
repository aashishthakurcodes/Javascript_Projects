
let data = new Date();
function renderdata(){
    
    data.setDate(1);
    let start_date = data.getDay();
    // console.log(start_date);
    
    let endDate = new Date(data.getFullYear(), data.getMonth() + 1, 0).getDate();
    console.log(endDate);
    
    let prevData = new Date(data.getFullYear(), data.getMonth(), 0).getDate();
    console.log(endDate);
    console.log(prevData);
    
    let month = [
      "Januaray",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month_data = (document.getElementById("month-data").innerHTML =
      month[data.getMonth()]);
    
    let date = (document.getElementById("date").innerHTML = data.getFullYear());
    
    let today_date=new Date()
    console.log(today_date);
    
    let month_div = "";
    for (x = start_date; x > 0; x--) {
      month_div += "<div class='prevData'>" + (prevData-x +1) + "</div>";
    }
    
    for (i = 1; i <= endDate; i++) {
     if(i == today_date.getDate() && data.getMonth()== today_date.getMonth()){
        month_div += "<div class='today'>" + i + "</div>";
     }else{
        month_div += "<div >" + i + "</div>";
     }
    }
    // document.getElementsByClassName("days")[0].innerHTML=month_div
    let monthd = document.getElementById("days");
    monthd.innerHTML = month_div;
    monthd.appendChild(month_div);

    
    
}

function display(){
  let time=new Date();
  let hours=time.getHours();
  console.log(hours);
  let minutes=time.getMinutes();
  console.log(minutes);
  let second=time.getSeconds();
  console.log(second);
  let session=document.getElementById("session")

if(hours>=12){
  document.getElementById("session").innerHTML="PM"
}
else{
  document.getElementById("session").innerHTML="AM"
}
document.getElementById("hours").innerHTML=hours
  document.getElementById("minutes").innerHTML=minutes
  document.getElementById("second").innerHTML=second

}
setInterval(display,10)


function movedata(val){
    if(val=='prev'){
        data.setMonth(data.getMonth()-1)
    }
    else if(val=='next'){
        data.setMonth(data.getMonth()+1)
    }
    renderdata()
}

let greeting=document.getElementById("heading");
 let time=new Date();
 let hours=time.getHours();

 if(hours>=12 && hours<=16){
  greeting.innerText="Good AfterNoon"
}
else if(hours>=16 && hours<=18){
  greeting.innerText="Good Evening"
}
else if(hours>=18 && hours<=24){
  greeting.innerText="Good Night";
}
else{
  greeting.innerText="Good Moarning";
}




 

