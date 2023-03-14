function valuebtn(e) {
  calculator_form.screen.value += e.value;
  console.log("hello");  
  console.log(calculator_form.screen.value); 
}

function Clear(){
  calculator_form.screen.value=null;
}

let dta=document.getElementById("input_data")

function calculate(){
  // console.log(dta.value);
  if(!dta.value){
    alert("Please enter some data")
    calculator_form.screen.value=null;
  }
  else{
  calculator_form.screen.value=eval(calculator_form.screen.value)
}
  
  
}
